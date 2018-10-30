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
  //createFormModificar: FormGroup;
  //createFormEliminar: FormGroup;

  constructor(private service: ServiceService, private fb: FormBuilder, private router: Router) {
    this.fecha = new Fecha();
    this.contador = 1;
    this.id = '';
    this.createFormAnadir = this.fb.group({
      Id: '',
      Fecha: this.fecha,
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

  getCitas(cedula: string) {
    //this.getId("116670973");
    this.service.getCitas().subscribe(response => {
      console.log('Respooooonse es:', response);
      this.rows = [];
      let dataKeys = ["Id", "Especialidad", "Fecha", "InformacionAdicional", "Estado"]; //For keys
      for (var i = 0; i < response["length"]; i++) {
        let dataValues = []; //For values
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

}
