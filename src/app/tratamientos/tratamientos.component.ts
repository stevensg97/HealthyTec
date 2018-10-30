import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators, FormControl, NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';

declare interface TableData {
  //headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-tratamientos',
  templateUrl: './tratamientos.component.html',
  styleUrls: ['./tratamientos.component.css']
})
export class TratamientosComponent implements OnInit {
  rows: any;                 //Rows control data
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
      Tipo: '',
      Dosis: '',
      MontoTratamiento: '',
    })
    this.createFormModificar = this.fb.group({
      Id: '',
      Nombre: '',
      Tipo: '',
      Dosis: '',
      MontoTratamiento: '',
    })
    this.createFormEliminar = this.fb.group({
      Id: '',
    })
   }

  ngOnInit() {
    this.getTratamientos();
  }

  addTratamiento(form: NgForm) {
    console.log(form.value);
    this.service.postTratamiento(form.value)
      .subscribe((data: any) => {
        console.log("<--- RESPONSE --->")
        console.log(data);
      });
  }

  updateTratamiento(form: NgForm) {
    console.log(form.value);
    this.getId(this.createFormModificar.value.Id);
    this.service.updateTratamiento(form.value, this.id)
      .subscribe((data: any) => {
        console.log("<--- RESPONSE --->")
        console.log(data);
      });
  }

  deleteTratamiento(form: NgForm) {
    console.log(form.value);
    this.getId(this.createFormEliminar.value.Id);
    this.service.deleteTratamiento(this.id)
      .subscribe((data: any) => {
        console.log("<--- RESPONSE --->")
        console.log(data);
      });
  }

  getId(identificador: string) {
    this.service.getTratamientos().subscribe(response => {
      console.log('Response es:', response);
      for (var i = 0; i < response["length"]; i++) {
        if (identificador == response[i]["Id"]) {
          this.id = response[i]["_id"];
        }
      }
    })
  }

  getTratamientos() {
    this.service.getTratamientos().subscribe(response => {
      console.log('Response es:', response);
      this.rows = [];
      let dataKeys = ["Id", "Nombre", "Tipo", "Dosis", "MontoTratamiento"]; //For keys
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

}
