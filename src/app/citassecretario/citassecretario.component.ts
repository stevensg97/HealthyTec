import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators, FormControl, NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Fecha } from '../models/fecha';

declare interface TableData {
  //headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-cita',
  templateUrl: './citassecretario.component.html',
  styleUrls: ['./citassecretario.component.css']
})
export class CitasSecretarioComponent implements OnInit {
  rows: any;                 //Rows control data
  citas: Object;
  id: "";
  Fecha: Fecha;
  createFormAnadir: FormGroup;
  createFormCancelar: FormGroup;

  constructor(private service: ServiceService, private fb: FormBuilder, private router: Router) {
    this.Fecha = new Fecha();
    this.createFormAnadir = this.fb.group({
      Id: '',
      Fecha: this.Fecha,
      Especialidad: '',
      CedulaPaciente: '',
      Estado: '',
      CodigoUsuario: '',
      InformacionAdicional: '',
    })
    this.createFormCancelar = this.fb.group({
      Id: '',
    })
  }

  ngOnInit() {
    //this.getCitas();
  }

  /*getcitas() {
    this.service.getCitas().subscribe(response => {
      console.log('Response es:', response);
      this.rows = [];
      let dataKeys = ["Id", "Fecha", "Especialidad", "CedulaPaciente", "Estado", "InformacionAdicional"]; //For keys
      for (var i = 0; i < response["length"]; i++) {
        let dataValues = []; //For values
        for (let key in dataKeys) {

          if (dataKeys[key] == "Fecha") {
            dataValues.push(response[i][dataKeys[key]]["Dia"]);
            dataValues.push(response[i][dataKeys[key]]["Mes"]);
            dataValues.push(response[i][dataKeys[key]]["Año"]);
            dataValues.push(response[i][dataKeys[key]]["Hora"]);
          } else {
            dataValues.push(response[i][dataKeys[key]]);
          }
        }
        this.rows[i] = dataValues;
      }
    })
    this.tableData1 = {
      //headerRow: [ 'Reporte', 'Dispositivo', 'Puente', 'Hora', 'Fecha', 'Distancia', 'Alerta'],
      dataRows: this.rows
    };
  }*/

  anadirCitaX(form: NgForm, Dia: any, Mes: any, Año: any, Hora: any) {
    this.setFecha(Dia,Mes,Año,Hora); 
    console.log(form.value);
    this.service.postCita(form.value) 
      .subscribe((data: any) => {
        console.log("<--- RESPONSE --->")
        console.log(data);
      });
  }

  /*updatecitaX() {
    console.log("CanceladaXUsuario");
    this.getId(this.createFormModificar.value.Id);
    this.service.updateCita(form.value, this.id)
      .subscribe((data: any) => {
        console.log("<--- RESPONSE --->")
        console.log(data);
      });
  }*/

  
  getId(Id: string) {
    this.service.getCitas().subscribe(response => {
      console.log('Response es:', response);
      for (var i = 0; i < response["length"]; i++) {
        if (Id == response[i]["Id"]) {
          this.id = response[i]["_id"];
        }
      }
    })
  }

  setFecha(Dia: any, Mes: any, Año: any, Hora: any) {
      this.Fecha.Dia = Dia;
      this.Fecha.Mes = Mes;
      this.Fecha.Año = Año;
      this.Fecha.Hora = Hora;
   

  } 

}
