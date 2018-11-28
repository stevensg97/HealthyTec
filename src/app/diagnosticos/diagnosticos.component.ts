import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators, FormControl, NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';

declare interface TableData {
  //headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-diagnosticos',
  templateUrl: './diagnosticos.component.html',
  styleUrls: ['./diagnosticos.component.css']
})
export class DiagnosticosComponent implements OnInit {
  rows: any;                 //Rows control data
  tratamientos: any;
  public tableData1: TableData;
  id: string;
  createFormAnadir: FormGroup;
  createFormModificar: FormGroup;
  createFormEliminar: FormGroup;

  constructor(private service: ServiceService, private fb: FormBuilder, private router: Router) {
    this.id = '';
    this.createFormAnadir = this.fb.group({
      Id: '',
      Nombre: '',
      Descripcion: '',
      Sintomas: '',
      Tratamientos: '',
    })
    this.createFormModificar = this.fb.group({
      Id: '',
      Nombre: '',
      Descripcion: '',
      Sintomas: '',
      Tratamientos: '',
    })
    this.createFormEliminar = this.fb.group({
      Id: '',
    })
  }

  ngOnInit() {
    this.getDiagnosticos();
    this.getTratamientos();
  }

  addDiagnostico(form: NgForm) {
    console.log(form.value);
    this.service.postDiagnostico(form.value)
      .subscribe((data: any) => {
        console.log("<--- RESPONSE --->")
        console.log(data);
      });
  }

  updateDiagnostico(form: NgForm) {
    console.log(form.value);
    this.getId(this.createFormModificar.value.Id);
    this.service.updateDiagnostico(form.value, this.id)
      .subscribe((data: any) => {
        console.log("<--- RESPONSE --->")
        console.log(data);
      });
  }

  deleteDiagnostico(form: NgForm) {
    console.log(form.value);
    this.getId(this.createFormEliminar.value.Id);
    this.service.deleteDiagnostico(this.id)
      .subscribe((data: any) => {
        console.log("<--- RESPONSE --->")
        console.log(data);
      });
  }

  getId(identificador: string) {
    this.service.getDiagnosticos().subscribe(response => {
      console.log('Response es:', response);
      for (var i = 0; i < response["length"]; i++) {
        if (identificador == response[i]["Id"]) {
          this.id = response[i]["_id"];
        }
      }
    })
  }

  getDiagnosticos() {
    this.service.getDiagnosticos().subscribe(response => {
      console.log('Response es:', response);
      this.rows = [];
      let dataKeys = ["Id", "Nombre", "Descripcion", "Sintomas", "Tratamientos"]; //For keys
      for (var i = 0; i < response["length"]; i++) {
        let dataValues = []; //For values
        for (let key in dataKeys) {
          dataValues.push(response[i][dataKeys[key]]);

        }
        this.rows[i] = dataValues;
      }
    })
    this.tableData1 = {
      //headerRow: [ 'Reporte', 'Dispositivo', 'Puente', 'Hora', 'Fecha', 'Distancia', 'Alerta'],
      dataRows: this.rows
    };
  }

  getTratamientos() {
    this.service.getTratamientos().subscribe(response => {
      console.log('Response es:', response);
      this.tratamientos = [];
      let dataKeys = ["Nombre"]; //For keys
      for (var i = 0; i < response["length"]; i++) {
        let dataValues = []; //For values
        for (let key in dataKeys) {
          dataValues.push(response[i][dataKeys[key]]);

        }
        this.tratamientos[i] = dataValues;
      }
    })
  }

}
