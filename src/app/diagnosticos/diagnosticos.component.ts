import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators, FormControl, NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-diagnosticos',
  templateUrl: './diagnosticos.component.html',
  styleUrls: ['./diagnosticos.component.css']
})
export class DiagnosticosComponent implements OnInit {

  createFormAnadir: FormGroup;
  //createFormModificar: FormGroup;
  //createFormEliminar: FormGroup;

  constructor(/*private service: ServiceService, private fb: FormBuilder, private router: Router*/) {
    /*
    this.createFormAnadir = this.fb.group({
      Identificador: '',
      Nombre: '',
      Descripcion: '',
      Sintomas: '',
      tratamientos: '',
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
