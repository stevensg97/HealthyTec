import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators, FormControl, NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Fecha } from '../models/fecha';

declare interface TableData {
  //headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-cita',
  templateUrl: './citassecretario.component.html',
  styleUrls: ['./citassecretario.component.css']
})
export class CitasSecretarioComponent implements OnInit {
  rows: any;                 //Rows control data
  citas: Object;
  citaUpdate: Object;
  id: "";
  Fecha: Fecha;
  createFormAnadir: FormGroup;
  createFormModificar: FormGroup;
  createFormCancelar: FormGroup;

  constructor(private service: ServiceService, private fb: FormBuilder, private router: Router) {
    this.Fecha = new Fecha();
    this.createFormAnadir = this.fb.group({
      Id: '',
      Fecha: this.Fecha,
      Especialidad: '',
      CedulaPaciente: '',
      Estado: '',
      CodigoUsuario: '',
      InformacionAdicional: '',
    })
    this.createFormModificar = this.fb.group({
      Id: '',
      Fecha: this.Fecha,
      Especialidad: '',
      CedulaPaciente: '',
      Estado: '',
      CodigoUsuario: '',
      InformacionAdicional: '',

    })
    this.createFormCancelar = this.fb.group({
      Id: '',
    })
  }

  ngOnInit() {
    //this.getCitas();
  }

 

  anadirCitaX(form: NgForm, Dia: any, Mes: any, Año: any, Hora: any) {
    this.setFecha(Dia,Mes,Año,Hora); 
    console.log(form.value);
    this.service.postCita(form.value) 
      .subscribe((data: any) => {
        console.log("<--- RESPONSE --->")
        console.log(data);
      });
  }
  setFecha(Dia: any, Mes: any, Año: any, Hora: any) {
    this.Fecha.Dia = Dia;
    this.Fecha.Mes = Mes;
    this.Fecha.Año = Año;
    this.Fecha.Hora = Hora;
 

} 


  /*getcitasForm(Id: string) {
    this.service.getCitas().subscribe(response => {
      console.log('Response es:', response);
      let dataKeys = ["Id", "Fecha", "Especialidad", "CedulaPaciente", "Estado", "InformacionAdicional"]; //For keys
      for (var i = 0; i < response["length"]; i++) {
         if (Id == response[i]["Id"]) {
          this.createFormModificar.setValue(Id) = { ["Id": response[i]["Id"]["Id"]: any});
          this.createFormModificar.setValue(Fechas) = response[i]["Fecha"]["Fecha"]);
          this.createFormModificar.setValue(Especialidad) = response[i]["Especialidad"]["Especialidad"]);
          this.createFormModificar.setValue(CedulaPaciente) = response[i]["CedulaPaciente"]["CedulaPaciente"]);
          this.createFormModificar.setValue(Estado) = "CanceladaXCentroAtencion";
          this.createFormModificar.setValue(InformacionAdicional) = response[i]["InformacionAdicional"]["InformacionAdicional"]);
      }
    })
    };
  }*/

    updatecitaX( CodigoUsuario: string) {
    console.log("CanceladaXUsuario");
    //this.getcitasForm(CodigoUsuario);
    this.service.updateCita(this.createFormModificar.value, CodigoUsuario)
      .subscribe((data: any) => {
        console.log("<--- RESPONSE --->")
        console.log(data);
      });
  }
 

}
