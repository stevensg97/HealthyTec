import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators, FormControl, NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-citasdoctor',
  templateUrl: './citasdoctor.component.html',
  styleUrls: ['./citasdoctor.component.css']
})
export class CitasDoctorComponent implements OnInit {
  fiterBy: string;
  createFormAnadir: FormGroup;
  anadirCitaForm: FormGroup;
  cancelCitaForm: FormGroup;


  constructor(private service: ServiceService, private fb: FormBuilder, private router: Router) {

    this.createFormAnadir = this.fb.group({
      Cedula: '',
      NombreCompleto: "",
      TipoFuncionario: '',
      FechaIngreso: '',
      AreaTrabajo: '',
      CodigoUsuario: '',
      Password: '',
    })}

  ngOnInit() {
    //this.resetForm();
  }

  prueba(){
    alert(this.fiterBy);
  }

  setFilter(filter: string){
    this.fiterBy=filter;
  }


  cancelCita(){

  }

  addCitas(form: NgForm){
    this.service.postCita(form.value) 
    .subscribe((data: any) => {
      console.log("<--- RESPONSE --->")
      console.log(data);
    });

  }

  updateEstadoCita(){

  }

}
