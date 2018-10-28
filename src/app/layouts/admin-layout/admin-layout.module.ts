import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { HttpClientModule } from '@angular/common/http'
import { CentroComponent } from '../../centro/centro.component';
import { FuncionarioComponent } from '../../funcionario/funcionario.component';
import { DiagnosticosComponent } from '../../diagnosticos/diagnosticos.component';
import { TratamientosComponent } from '../../tratamientos/tratamientos.component';
import { CitasComponent } from '../../citas/citas.component';
import { ReportesComponent } from '../../reportes/reportes.component';
import { CitasDoctorComponent } from '../../citasdoctor/citasdoctor.component';
import { CitasSecretarioComponent } from '../../citassecretario/citassecretario.component';
import { ReportesDoctorComponent } from '../../reportesdoctor/reportesdoctor.component';
import { ReportesSecretarioComponent } from '../../reportessecretario/reportessecretario.component';
import { ServiceService } from '../../service.service';
//import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    //DashboardComponent,
    //UserProfileComponent,
    //TableListComponent,
    //TypographyComponent,
    //IconsComponent,
    //NotificationsComponent,
    CentroComponent,
    FuncionarioComponent,
    DiagnosticosComponent,
    TratamientosComponent,
    CitasComponent,
    ReportesComponent,
    CitasDoctorComponent,
    CitasSecretarioComponent,
    ReportesDoctorComponent,
    ReportesSecretarioComponent,
  ],
  providers: [ServiceService],
})

export class AdminLayoutModule { }
