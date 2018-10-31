import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators, FormControl, NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Fecha } from 'app/models/fecha';

declare interface TableData {
  //headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  fiterBy: string;
  rows: any;    //Rows control data
  public tableData1: TableData;
  contador: number;
  id: string;
  fecha: Fecha;
  createFormAnadir: FormGroup;
  createFormModificar: FormGroup;
  //createFormEliminar: FormGroup;

  constructor(private service: ServiceService, private fb: FormBuilder, private router: Router) {
    this.fecha = new Fecha();
    this.contador = 1;
    this.id = '';
    this.fiterBy = '';
    this.createFormAnadir = this.fb.group({
      Id: '',
      Fecha: this.fecha,
      Especialidad: '',
      CedulaPaciente: '',
      Estado: '',
      InformacionAdicional: '',
    });
    this.createFormModificar = this.fb.group({
      Id: '',
      Fecha: '',
      Especialidad: '',
      CedulaPaciente: '',
      Estado: '',
      InformacionAdicional: '',
    });
  }

  ngOnInit() {
    this.getCitas("116670973");
  }

  addCita(form: NgForm, date: string) {
    this.setFecha(date);
    this.setId();
    this.setEstado();
    this.setCedula();
    console.log(form.value);
    this.service.postCita(form.value)
      .subscribe((data: any) => {
        console.log("<--- RESPONSE --->")
        console.log(data);
      });
  }

  updateCita(form: NgForm, identificador: string) {
    console.log(form.value);
    this.service.getCitas().subscribe(response => {
      console.log('Respooooonse es:', response);
      for (var i = 0; i < response["length"]; i++) {
        if (response[i]["Id"] == identificador) {
          this.createFormModificar.value.Id = response[i]["Id"];
          this.createFormModificar.value.Fecha = response[i]["Fecha"];
          this.createFormModificar.value.Especialidad = response[i]["Especialidad"];
          this.createFormModificar.value.CedulaPaciente = response[i]["CedulaPaciente"];
          this.createFormModificar.value.Estado = "CanceladaPorPaciente";
          this.createFormModificar.value.InformacionAdicional = response[i]["InformacionAdicional"];
          console.log("Este es el form", this.createFormModificar);
          this.id = response[i]["_id"];
          console.log("Este es el ID: ", this.id);
        }
      }
      this.service.updateCita(this.createFormModificar.value, this.id)
      .subscribe((data: any) => {
        console.log("<--- RESPONSE --->")
        console.log(data);
      });
    });
  }

  getCitas(cedula: string) {
    //this.getId("116670973");
    this.service.getCitas().subscribe(response => {
      console.log('Respooooonse es:', response);
      this.rows = [];
      let dataValues = [];
      let dataKeys = ["Id", "Especialidad", "Fecha", "InformacionAdicional", "Estado"]; //For keys
      for (var i = 0; i < response["length"]; i++) {
        dataValues = []; //For values
        for (let key in dataKeys) {
          if (response[i]["CedulaPaciente"] == cedula) {
            if (dataKeys[key] == "Fecha") {
              dataValues.push(response[i][dataKeys[key]]["Dia"] + "/" + response[i][dataKeys[key]]["Mes"] + "/"
                + response[i][dataKeys[key]]["Año"]);
              dataValues.push(response[i][dataKeys[key]]["Hora"]);
            } else {
              dataValues.push(response[i][dataKeys[key]]);
            }
          }
        }
        this.rows[i] = dataValues;
      }
    })
    this.tableData1 = {
      //headerRow: [ 'Reporte', 'Dispositivo', 'Puente', 'Hora', 'Fecha', 'Distancia', 'Alerta'],
      dataRows: this.rows
    };
  }

  setFecha(date: string) {
    const fecha = new Date(date);
    //alert(fecha.getDate());
    //alert(date.split("-",2)[1]);
    //alert(fecha.getUTCFullYear());
    //alert(date.split("T")[1]);
    this.fecha.Dia = fecha.getDate();
    this.fecha.Mes = Number.parseInt(date.split("-", 2)[1]);
    this.fecha.Año = fecha.getUTCFullYear();
    this.fecha.Hora = date.split("T")[1];
  }

  setFilter(filter: string) {
    this.fiterBy = filter;
  }

  setId() {
    this.createFormAnadir.value.Id = this.contador;
    this.contador++;
  }

  setEstado() {
    this.createFormAnadir.value.Estado = "Registrada";
  }

  setCedula() {
    this.createFormAnadir.value.CedulaPaciente = "116670973";
  }

  getId(cedula: string) {
    this.service.getCitas().subscribe(response => {
      console.log('Citas son:', response);
      for (var i = 0; i < response["length"]; i++) {
        if (cedula == response[i]["CedulaPaciente"]) {
          this.id = response[i]["_id"];
          console.log(this.id);
        }
      }
    })
  }

  getCitasByDate(cedula: string, rango: string) {
    //this.getId("116670973");
    this.service.getCitasByDate(rango).subscribe(response => {
      console.log('Respooooonse es:', response);
      this.rows = [];
      let dataKeys = ["Id", "Especialidad", "Fecha", "InformacionAdicional", "Estado"]; //For keys
      for (var i = 0; i < response["cita"]["length"]; i++) {
        let dataValues = []; //For values
        for (let key in dataKeys) {
          if (response["cita"][i]["CedulaPaciente"] == cedula) {
            if (dataKeys[key] == "Fecha") {
              dataValues.push(response["cita"][i][dataKeys[key]]["Dia"] + "/" + response["cita"][i][dataKeys[key]]["Mes"] + "/"
                + response["cita"][i][dataKeys[key]]["Año"]);
              dataValues.push(response["cita"][i][dataKeys[key]]["Hora"]);
            } else {
              dataValues.push(response["cita"][i][dataKeys[key]]);
            }
          }
        }
        this.rows[i] = dataValues;
      }
    })
    this.tableData1 = {
      //headerRow: [ 'Reporte', 'Dispositivo', 'Puente', 'Hora', 'Fecha', 'Distancia', 'Alerta'],
      dataRows: this.rows,
    };
  }
  getCitasByCond(cedula: string, condicion: string) {
    //this.getId("116670973");
    this.service.getCitasByCond(condicion).subscribe(response => {
      console.log('Respooooonse es:', response);
      console.log("Primer elemento ", response["citas"][0]);
      this.rows = [];
      let dataKeys = ["Id", "Especialidad", "Fecha", "InformacionAdicional", "Estado"]; //For keys
      for (var i = 0; i < response["total"]; i++) {
        let dataValues = []; //For values
        for (let key in dataKeys) {
          if (response["citas"][i]["CedulaPaciente"] == cedula) {
            if (dataKeys[key] == "Fecha") {
              dataValues.push(response["citas"][i][dataKeys[key]]["Dia"] + "/" + response["citas"][i][dataKeys[key]]["Mes"] + "/"
                + response["citas"][i][dataKeys[key]]["Año"]);
              dataValues.push(response["citas"][i][dataKeys[key]]["Hora"]);
            } else {
              dataValues.push(response["citas"][i][dataKeys[key]]);
            }
          }
        }
        this.rows[i] = dataValues;
      }
    })
    this.tableData1 = {
      //headerRow: [ 'Reporte', 'Dispositivo', 'Puente', 'Hora', 'Fecha', 'Distancia', 'Alerta'],
      dataRows: this.rows
    };
  }

  filtrar(filtroFechas: string, filtroEstado: string, filtroArea: string) {
    if (this.fiterBy == 'fechas') {
      this.getCitasByDate("116670973", filtroFechas);
    }
    if (this.fiterBy == 'estado') {
      this.getCitasByCond("116670973", filtroEstado);
    }
    if (this.fiterBy == 'area') {
      this.getCitasByCond("116670973", filtroArea);
    }
  }

}
