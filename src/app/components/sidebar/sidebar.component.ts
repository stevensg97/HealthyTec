import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
var typeUser = "administrador";
export var ROUTES: RouteInfo[];
if (typeUser == "algo") {
    ROUTES = [
        { path: '/centro', title: 'Centros de Atención', icon: 'local_hospital', class: '' },
        { path: '/funcionario', title: 'Funcionarios', icon: 'group', class: '' },
        { path: '/diagnosticos', title: 'Diagnósticos/Enfermedades', icon: 'list_alt', class: '' },
        { path: '/tratamientos', title: 'Tratamientos', icon: 'healing', class: '' },
        { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
        { path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },
        { path: '/table-list', title: 'Table List', icon: 'content_paste', class: '' },
        { path: '/typography', title: 'Typography', icon: 'library_books', class: '' },
        { path: '/icons', title: 'Icons', icon: 'bubble_chart', class: '' },
        { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' },
    ];
} if (typeUser === "administrador") {
    ROUTES = [
        { path: '/centro', title: 'Centros de Atención', icon: 'local_hospital', class: '' },
        { path: '/funcionario', title: 'Funcionarios', icon: 'group', class: '' },
        { path: '/diagnosticos', title: 'Diagnósticos/Enfermedades', icon: 'list_alt', class: '' },
        { path: '/tratamientos', title: 'Tratamientos', icon: 'healing', class: '' },
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
    constructor() { }

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
