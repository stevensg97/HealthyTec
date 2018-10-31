import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators, FormControl, NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Fecha } from '../models/fecha';


declare interface TableData {
  dataRows: string[][];
}

@Component({
  selector: 'app-reportesdoctor',
  templateUrl: './reportesdoctor.component.html',
  styleUrls: ['./reportesdoctor.component.css']
})
export class ReportesDoctorComponent implements OnInit {
  public tableData1: TableData;
  createFormAnadir: FormGroup;
  rows: any;                 //Rows control data
  Fecha: Fecha;
  //createFormModificar: FormGroup;
  //createFormEliminar: FormGroup;

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
  }

  ngOnInit() {
    //this.resetForm();
  }
  getcitas() {
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
  }
 
}
