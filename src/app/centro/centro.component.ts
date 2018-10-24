import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators, FormControl, NgForm } from '@angular/forms';
import { service} from '../../service.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class CentroAntencion implements OnInit {

  createFormAnadir: FormGroup;
  createFormModificar: FormGroup;
  createFormEliminar: FormGroup;

  constructor(private service: service ,private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
        CodigoCentro: '',
        Nombre: '',
        Lugar: '',
        Capacidad: '',
        TipoCentro: '',
        FechaIngreso: '',
        Area: '',
    })
   }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form != null)
      form.reset();
  }

  addCentro(form: NgForm){
    console.log(form.value);
    this.service.postClient(form.value)
    .subscribe((data: any) =>{
      console.log("<--- RESPONSE --->")
      console.log(data);
    });
  }

  updateCentro(form: NgForm){
    console.log(form.value);
    this.service.postClient(form.value)
    .subscribe((data: any) =>{
      console.log("<--- RESPONSE --->")
      console.log(data);
    });
  }

}
