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
  fecha: Fecha;
  createFormAnadir: FormGroup; 
  //createFormModificar: FormGroup;
  //createFormEliminar: FormGroup;

  constructor(private service: ServiceService, private fb: FormBuilder, private router: Router) {
    this.fecha = new Fecha();
    this.contador = 1;
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
    //this.resetForm();
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

  setFecha(date: string){
    const fecha = new Date(date);
    //alert(fecha.getDate());
    //alert(date.split("-",2)[1]);
    //alert(fecha.getUTCFullYear());
    //alert(date.split("T")[1]);
    this.fecha.Dia = fecha.getDate();
    this.fecha.Mes = Number.parseInt(date.split("-",2)[1]);
    this.fecha.Año = fecha.getUTCFullYear();
    this.fecha.Hora = date.split("T")[1];
  }

  setFilter(filter: string){
    this.fiterBy=filter;
  }

  setId(){
    this.createFormAnadir.value.Id = this.contador;
    this.contador++;
  }

  setEstado(){
    this.createFormAnadir.value.Estado = "Registrada";
  }

  setCedula(){
    this.createFormAnadir.value.CedulaPaciente = "116670973";
  }

}
