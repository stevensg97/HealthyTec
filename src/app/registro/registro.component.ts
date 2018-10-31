import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators, FormControl, NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Nombre } from 'app/models/nombre';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  createFormAnadir: FormGroup;
  nombrecompleto: Nombre;
  constructor(private service: ServiceService, private fb: FormBuilder, private router: Router) {
    this.nombrecompleto = new Nombre();
    this.createFormAnadir = this.fb.group({
      Cedula: '',
      NombreCompleto: this.nombrecompleto,
      FechaNacimiento: '',
      TipoSangre: '',
      Nacionalidad: '',
      Ubicacion: '',
      Telefonos: '',
      CodigoUsuario: '',
      Password: '',
    })
  }

  ngOnInit() {
    //this.resetForm();
  }

  addPaciente(form: NgForm, nombre: any, apellido1: any, apellido2: any, telefonos: string) {
    this.setNombre(nombre, apellido1, apellido2);
    this.createFormAnadir.value.Telefonos = telefonos.split(",");
    console.log(form.value);
    this.service.postPaciente(form.value)
      .subscribe((data: any) => {
        console.log("<--- RESPONSE --->")
        console.log(data);
      });
    this.router.navigate(['../login']);
  }

  setNombre(nombre: any, apellido1: any, apellido2: any) {
    this.nombrecompleto.Nombre = nombre;
    this.nombrecompleto.Apellido1 = apellido1;
    this.nombrecompleto.Apellido2 = apellido2;

  }

}
