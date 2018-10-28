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
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  rows: any;                 //Rows control data
  public tableData1: TableData;
  nombrecompletoadd: Nombre;
  nombrecompletoupdate: Nombre;
  contador: number;
  id: string;
  funcionarios: Object;
  createFormAnadir: FormGroup;
  createFormModificar: FormGroup;
  createFormEliminar: FormGroup;

  constructor(private service: ServiceService, private fb: FormBuilder, private router: Router) {
    this.nombrecompletoadd = new Nombre();
    this.nombrecompletoupdate = new Nombre();
    this.contador = 1;
    this.id = '';
    this.createFormAnadir = this.fb.group({
      Cedula: '',
      NombreCompleto: this.nombrecompletoadd,
      TipoFuncionario: '',
      FechaIngreso: '',
      AreaTrabajo: '',
      CodigoUsuario: '',
      Password: '',
    })
    this.createFormModificar = this.fb.group({
      Cedula: '',
      NombreCompleto: this.nombrecompletoupdate,
      TipoFuncionario: '',
      FechaIngreso: '',
      AreaTrabajo: '',
      CodigoUsuario: '',
      Password: '',
    })
    this.createFormEliminar = this.fb.group({
      Cedula: '',
    })
  }

  ngOnInit() {
    this.getFuncionarios();
  }

  getFuncionarios() {
    this.service.getFuncionarios().subscribe(response => {
      console.log('Response es:', response);
      this.rows = [];
      let dataKeys = ["Cedula", "NombreCompleto", "TipoFuncionario", "FechaIngreso", "AreaTrabajo"]; //For keys
      for (var i = 0; i < response["length"]; i++) {
        let dataValues = []; //For values
        for (let key in dataKeys) {

          if (dataKeys[key] == "NombreCompleto") {
            dataValues.push(response[i][dataKeys[key]]["Nombre"]);
            dataValues.push(response[i][dataKeys[key]]["Apellido1"]);
            dataValues.push(response[i][dataKeys[key]]["Apellido2"]);
          } else {
            dataValues.push(response[i][dataKeys[key]]);
          }
        }
        this.rows[i] = dataValues;
      }
    })
    this.tableData1 = {
      //headerRow: [ 'Reporte', 'Dispositivo', 'Puente', 'Hora', 'Fecha', 'Distancia', 'Alerta'],
      dataRows: this.rows
    };
  }


  addFuncionario(form: NgForm, nombre: any, apellido1: any, apellido2: any) {
    this.setNombre(nombre, apellido1, apellido2, "add"); 
    this.genUser("add");
    this.genPass("add");
    console.log(form.value);
    this.service.postFuncionario(form.value)
      .subscribe((data: any) => {
        console.log("<--- RESPONSE --->")
        console.log(data);
      });
  }

  updateFuncionario(form: NgForm, nombre: any, apellido1: any, apellido2: any) {
    this.setNombre(nombre, apellido1, apellido2, "update");
    this.genUser("update");
    this.genPass("update");
    console.log(form.value);
    this.getId(this.createFormModificar.value.Cedula);
    this.service.updateFuncionario(form.value, this.id)
      .subscribe((data: any) => {
        console.log("<--- RESPONSE --->")
        console.log(data);
      });
  }

  deleteFuncionario(form: NgForm) {
    console.log(form.value);
    this.getId(this.createFormEliminar.value.Cedula);
    this.service.deleteFuncionario(this.id)
      .subscribe((data: any) => {
        console.log("<--- RESPONSE --->")
        console.log(data);
      });
  }

  getId(cedula: string) {
    this.service.getFuncionarios().subscribe(response => {
      console.log('Response es:', response);
      for (var i = 0; i < response["length"]; i++) {
        if (cedula == response[i]["Cedula"]) {
          this.id = response[i]["_id"];
        }
      }
    })
  }

  setNombre(nombre: any, apellido1: any, apellido2: any, accion: string) {
    if (accion === "add") {
      this.nombrecompletoadd.Nombre = nombre;
      this.nombrecompletoadd.Apellido1 = apellido1;
      this.nombrecompletoadd.Apellido2 = apellido2;
    } else {
      this.nombrecompletoupdate.Nombre = nombre;
      this.nombrecompletoupdate.Apellido1 = apellido1;
      this.nombrecompletoupdate.Apellido2 = apellido2;
    }

  }

  genPass(accion: string) {
    if (accion === "add") {
      this.createFormAnadir.value.Password = '' + Math.floor(1000 + Math.random() * 9000);
    } else {
      this.createFormModificar.value.Password = '' + Math.floor(1000 + Math.random() * 9000);
    }

  }

  genUser(accion: string) {
    if (accion === "add") {
      if (this.createFormAnadir.value.TipoFuncionario === "Doctor") {
        this.createFormAnadir.value.CodigoUsuario = "doc";
      } if (this.createFormAnadir.value.TipoFuncionario === "Enfermero") {
        this.createFormAnadir.value.CodigoUsuario = "enf";
      } if (this.createFormAnadir.value.TipoFuncionario === "Secretario") {
        this.createFormAnadir.value.CodigoUsuario = "sec";
      }
      this.createFormAnadir.value.CodigoUsuario = this.createFormAnadir.value.CodigoUsuario + this.contador;
    } else {
      if (this.createFormModificar.value.TipoFuncionario === "Doctor") {
        this.createFormModificar.value.CodigoUsuario = "doc";
      } if (this.createFormModificar.value.TipoFuncionario === "Enfermero") {
        this.createFormModificar.value.CodigoUsuario = "enf";
      } if (this.createFormModificar.value.TipoFuncionario === "Secretario") {
        this.createFormModificar.value.CodigoUsuario = "sec";
      }
      this.createFormModificar.value.CodigoUsuario = this.createFormModificar.value.CodigoUsuario + this.contador;
    }
    this.contador++;
  }

}
