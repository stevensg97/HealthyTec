import { Component, OnInit } from '@angular/core';
import { AdminLayoutComponent } from '../../layouts/admin-layout/admin-layout.component';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
var typeUser = "";
export var ROUTES: RouteInfo[];
if (typeUser === "administrador") {
    ROUTES = [
        { path: '/centro', title: 'Centros de Atención', icon: 'local_hospital', class: '' },
        { path: '/funcionario', title: 'Funcionarios', icon: 'group', class: '' },
        { path: '/diagnosticos', title: 'Diagnósticos/Enfermedades', icon: 'list_alt', class: '' },
        { path: '/tratamientos', title: 'Tratamientos', icon: 'healing', class: '' },
        { path: '/reportes', title: 'Reportes', icon: 'description', class: '' },
    ];
} if (typeUser === "doctor") {
    ROUTES = [
        { path: '/citasdoctor', title: 'Citas', icon: 'calendar_today', class: '' },
        { path: '/reportesdoctor', title: 'Reportes', icon: 'description', class: '' },
    ];
} if (typeUser === "secretario") {
    ROUTES = [
        { path: '/citassecretario', title: 'Citas', icon: 'calendar_today', class: '' },
        { path: '/reportessecretario', title: 'Reportes', icon: 'description', class: '' },
    ];
} else {
    ROUTES = [
        { path: '/citas', title: 'Citas', icon: 'calendar_today', class: '' },
    ];
}
/*export const ROUTES: RouteInfo[] = [
    { path: '/centro', title: 'Centros de Atención',  icon:'local_hospital', class: '' },
    { path: '/funcionario', title: 'Funcionarios',  icon:'group', class: '' },
    { path: '/diagnosticos', title: 'Diagnósticos/Enfermedades',  icon:'list_alt', class: '' },
    { path: '/tratamientos', title: 'Tratamientos',  icon:'healing', class: '' },
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
];*/

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    menuItems: any[];
    sysModule: string = typeUser;
    constructor(public appComponent: AdminLayoutComponent) { 
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
