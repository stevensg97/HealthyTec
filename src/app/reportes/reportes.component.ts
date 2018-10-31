import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators, FormControl, NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';

declare interface TableData {
  //headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  fiterBy: string;
  rowsTratamientos: any;
  rowsDiagnosticos: any;
  rowsEnfermedades: any;
  rowsPacientes: any;                 //Rows control data
  public tableDataTratamientos: TableData;
  public tableDataDiagnosticos: TableData;
  public tableDataEnfermedades: TableData;
  public tableDataPacientes: TableData;

  createFormAnadir: FormGroup;

  constructor(private service: ServiceService, private fb: FormBuilder, private router: Router) {
    this.fiterBy = '';
    this.rowsTratamientos = [];
    this.rowsDiagnosticos = [];
    this.rowsEnfermedades = [];
    this.rowsPacientes = [];
    this.tableDataDiagnosticos = {
      dataRows: this.rowsDiagnosticos,
    }
    this.tableDataTratamientos = {
      dataRows: this.rowsTratamientos,
    }
    this.tableDataEnfermedades = {
      dataRows: this.rowsEnfermedades,
    }
    this.tableDataPacientes = {
      dataRows: this.rowsPacientes,
    }
    this.createFormAnadir = this.fb.group({
      Cantidad: '',
    })
  }

  ngOnInit() {
    this.getReporteTratamientos();
    this.getReporteEnfermedades();
    this.getReporteDiagnosticos();
    this.getTresPacientes();
  }

  getReporteTratamientos() {
    this.service.getReporteTratamientos().subscribe(response => {
      console.log('Response es:', response);
      this.rowsTratamientos = [];
      let dataKeys = ["nombre", "cantidad", "monto"]; //For keys
      for (var i = 0; i < response["length"]; i++) {
        let dataValues = []; //For values
        for (let key in dataKeys) {
          dataValues.push(response[i][dataKeys[key]]);

        }
        this.rowsTratamientos[i] = dataValues;
      }
    })
    this.tableDataTratamientos = {
      dataRows: this.rowsTratamientos,
    };
  }

  getReporteDiagnosticos() {
    this.service.getReporteDiagnosticos().subscribe(response => {
      console.log('Response es:', response);
      this.rowsDiagnosticos = [];
      let dataValues = []; //For values
      for (var i = 0; i < response["length"]; i++) {
        dataValues = [];
        dataValues.push(response[i]["Nombre"]["Nombre"] + " " + response[i]["Nombre"]["Apellido1"] + " " + response[i]["Nombre"]["Apellido2"]);
        dataValues.push("[ " + response[i]["rango"][0] + " , " + response[i]["rango"][1] + " ]");
        this.rowsDiagnosticos[i] = dataValues;
      }
    })
    this.tableDataDiagnosticos = {
      dataRows: this.rowsDiagnosticos,
    };
  }

  getReporteEnfermedades() {
    this.service.getReporteEnfermedades().subscribe(response => {
      console.log('Response es:', response);
      this.rowsEnfermedades = [];
      let dataKeys = ["nombre", "cantidad"]; //For keys
      for (var i = 0; i < response["length"]; i++) {
        let dataValues = []; //For values
        for (let key in dataKeys) {
          dataValues.push(response[i][dataKeys[key]]);

        }
        this.rowsEnfermedades[i] = dataValues;
      }
    })
    this.tableDataEnfermedades = {
      dataRows: this.rowsEnfermedades,
    };
  }

  getTresPacientes() {
    this.service.getTresPacientes().subscribe(response => {
      console.log('Response es:', response);
      this.rowsPacientes = [];
      let dataValues = []; //For values
      for (var i = 0; i < response["length"]; i++) {
        dataValues = [];
        dataValues.push(response[i]["nombre"]["Nombre"] + " " + response[i]["nombre"]["Apellido1"] + " " + response[i]["nombre"]["Apellido2"]);
        dataValues.push(response[i]["cantidad"]);
        this.rowsPacientes[i] = dataValues;
      }
    })
    this.tableDataPacientes = {
      dataRows: this.rowsPacientes,
    };
  }

  getCantidadCitas(condicion: string) {
    this.service.getCantidadCitas(condicion).subscribe(response => {
      console.log(response);
      this.createFormAnadir = this.fb.group({
        Cantidad: response["total"] + '',
      });
    });
  }

  getCantidadCitasFecha(fechas: string) {
    this.service.getCantidadCitasFecha(fechas).subscribe(response => {
      console.log(response);
      this.createFormAnadir = this.fb.group({
        Cantidad: response["total"] + '',
      });
    });
  }

  filtrar(filtroFechas: string, filtroEstado: string, filtroArea: string, filtroCedula: string) {
    if (this.fiterBy == 'cedula') {
      this.getCantidadCitas(filtroCedula);
    }
    if (this.fiterBy == 'fechas') {
      this.getCantidadCitasFecha(filtroFechas);
    }
    if (this.fiterBy == 'estado') {
      this.getCantidadCitas(filtroEstado);
    }
    if (this.fiterBy == 'area') {
      this.getCantidadCitas(filtroArea);
    }
  }

  setFilter(filter: string) {
    this.fiterBy = filter;
  }

}
