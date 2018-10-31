import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators, FormControl, NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Nombre } from 'app/models/nombre';

declare interface TableData {
  //headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-centro',
  templateUrl: './centro.component.html',
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {
  rows: any;                 //Rows control data
  public tableData1: TableData;
  nombrecompletoadd: Nombre;
  nombrecompletoupdate: Nombre;
  contador: number;
  id: string;
  centros: Object;
  createFormAnadir: FormGroup;
  createFormModificar: FormGroup;
  createFormEliminar: FormGroup;

  constructor(private service: ServiceService, private fb: FormBuilder, private router: Router) {
    this.nombrecompletoadd = new Nombre();
    this.nombrecompletoupdate = new Nombre();
    this.contador = 1;
    this.id = '';
    this.createFormAnadir = this.fb.group({
      CodigoCentro: '',
      Nombre: '',
      Tipocentro: '',
      Ubicacion: '',
      CapacidadMaxima: '',
      TipoCentro: '',
    })
    this.createFormModificar = this.fb.group({
     CodigoCentro: '',
      Nombre: '',
      Tipocentro: '',
      Ubicacion: '',
      CapacidadMaxima: '',
      TipoCentro: '',
    })
    this.createFormEliminar = this.fb.group({
      CodigoCentro: '',
    })
  }

  ngOnInit() {
    this.getcentros();
  }

  getcentros() {
    this.service.getCentroAtenciones().subscribe(response => {
      console.log('Response es:', response);
      this.rows = [];
      let dataKeys = ["CodigoCentro", "Nombre", "Ubicacion", "CapacidadMaxima", "TipoCentro"]; //For keys
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


  addcentro(form: NgForm) {

    console.log(form.value);
    this.service.postCentroAtencion(form.value) 
      .subscribe((data: any) => {
        console.log("<--- RESPONSE --->")
        console.log(data);
      });
  }

  updatecentro(form: NgForm,) {
    console.log(form.value);
    this.getId(this.createFormModificar.value.CodigoCentro);
    this.service.updateCentroAtencion(form.value, this.id)
      .subscribe((data: any) => {
        console.log("<--- RESPONSE --->")
        console.log(data);
      });
  }

  deletecentro(form: NgForm) {
    console.log(form.value);
    this.getId(this.createFormEliminar.value.CodigoCentro);
    this.service.deleteCentroAtencion(this.id)
      .subscribe((data: any) => {
        console.log("<--- RESPONSE --->")
        console.log(data);
      });
  }

  getId(cedula: string) {
    this.service.getCentroAtenciones().subscribe(response => {
      console.log('Response es:', response);
      for (var i = 0; i < response["length"]; i++) {
        if (cedula == response[i]["CodigoCentro"]) {
          this.id = response[i]["_id"];
        }
      }
    })
  }



}
