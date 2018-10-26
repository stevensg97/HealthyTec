import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators, FormControl, NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  createFormAnadir: FormGroup;
  //createFormModificar: FormGroup;
  //createFormEliminar: FormGroup;

  constructor(/*private service: ServiceService, private fb: FormBuilder, private router: Router*/) {
    /*this.createFormAnadir = this.fb.group({
        Cedula: '',
        Nombre: '',
        Apellido1: '',
        Apellido2: '',
        TipoFuncionario: '',
        FechaIngreso: '',
        Area: '',
    })*/
  }

  ngOnInit() {
    //this.resetForm();
  }
  /*
  prueba(){
    alert(this.createFormAnadir.value.TipoCentro);
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
  }*/
 
}
