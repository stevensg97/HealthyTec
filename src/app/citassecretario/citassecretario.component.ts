import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators, FormControl, NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-citassecretario',
  templateUrl: './citassecretario.component.html',
  styleUrls: ['./citassecretario.component.css']
})
export class CitasSecretarioComponent implements OnInit {
  fiterBy: string;
  createFormAnadir: FormGroup;
  //createFormModificar: FormGroup;
  //createFormEliminar: FormGroup;

  constructor(/*private service: ServiceService, private fb: FormBuilder, private router: Router*/) {
    /*this.createFormAnadir = this.fb.group({
      Area: '',
      Timestamp: '',
      Observacion: '',
    });*/
  }

  ngOnInit() {
    //this.resetForm();
  }

  prueba(){
    alert(this.fiterBy);
  }

  setFilter(filter: string){
    this.fiterBy=filter;
  }
  /*
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
