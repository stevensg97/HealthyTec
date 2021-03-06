import { Routes } from '@angular/router';

//import { DashboardComponent } from '../../dashboard/dashboard.component';
//import { UserProfileComponent } from '../../user-profile/user-profile.component';
//import { TableListComponent } from '../../table-list/table-list.component';
//import { TypographyComponent } from '../../typography/typography.component';
//import { IconsComponent } from '../../icons/icons.component';
//import { NotificationsComponent } from '../../notifications/notifications.component';
import { LoginComponent } from '../../login/login.component';
import { RegistroComponent } from '../../registro/registro.component';
import { CentroComponent } from '../../centro/centro.component';
import { FuncionarioComponent } from '../../funcionario/funcionario.component';
import { DiagnosticosComponent } from '../../diagnosticos/diagnosticos.component';
import { TratamientosComponent } from '../../tratamientos/tratamientos.component';
import { CitasComponent } from '../../citas/citas.component';
import { ReportesComponent } from '../../reportes/reportes.component';
import { ReportesDoctorComponent } from '../../reportesdoctor/reportesdoctor.component';
import { ReportesSecretarioComponent } from '../../reportessecretario/reportessecretario.component';
import { CitasDoctorComponent } from '../../citasdoctor/citasdoctor.component';
import { CitasSecretarioComponent } from '../../citassecretario/citassecretario.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    //{ path: 'dashboard',      component: DashboardComponent },
    //{ path: 'user-profile',   component: UserProfileComponent },
    //{ path: 'table-list',     component: TableListComponent },
    //{ path: 'typography',     component: TypographyComponent },
    //{ path: 'icons',          component: IconsComponent },
    //{ path: 'notifications',  component: NotificationsComponent },
    { path: 'login',  component: LoginComponent },
    { path: 'registro',  component: RegistroComponent },
    { path: 'centro',  component: CentroComponent },
    { path: 'funcionario',  component: FuncionarioComponent },
    { path: 'diagnosticos',  component: DiagnosticosComponent },
    { path: 'tratamientos',  component: TratamientosComponent },
    { path: 'citas',  component: CitasComponent },
    { path: 'reportes',  component: ReportesComponent },
    { path: 'citasdoctor',  component: CitasDoctorComponent },
    { path: 'citassecretario',  component: CitasSecretarioComponent },
    { path: 'reportesdoctor',  component: ReportesDoctorComponent },
    { path: 'reportessecretario',  component: ReportesSecretarioComponent },
];
