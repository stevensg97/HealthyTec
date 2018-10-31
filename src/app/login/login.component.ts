import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators, FormControl, NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public appComponent: AdminLayoutComponent, private service: ServiceService,
    private fb: FormBuilder, private router: Router) {

  }

  ngOnInit() {
  }

  login(user: string, password: string) {
    if (user.substring(0, 3) == "doc") {
      this.service.getFuncionarios().subscribe(response => {
        console.log('Raaaaaesponse is ', response);
        for (var i = 0; i < response["length"]; i++) {
          if (user == response[i]["CodigoUsuario"]) {
            if (password == response[i]["Password"]) {
              this.appComponent.typeUser="doctor";
              this.appComponent.trueLogged();
              this.router.navigate(['../citasdoctor']);
              break;
            } else {
              alert("Usuario o contraseña incorrecto!");
            }
          }
        }
      })

    } else if (user.substring(0, 3) == "sec") {
      this.service.getFuncionarios().subscribe(response => {
        console.log('Raaaaaesponse is ', response);
        for (var i = 0; i < response["length"]; i++) {
          if (user == response[i]["CodigoUsuario"]) {
            if (password == response[i]["Password"]) {
              this.appComponent.typeUser="secretario";
              this.appComponent.trueLogged();
              this.router.navigate(['../citassecretario']);
              break;
            } else {
              alert("Usuario o contraseña incorrecto!");
            }
          }
        }
      })

    } else if (user.substring(0, 3) == "adm") {
      this.service.getFuncionarios().subscribe(response => {
        console.log('Raaaaaesponse is ', response);
        for (var i = 0; i < response["length"]; i++) {
          if (user == response[i]["CodigoUsuario"]) {
            if (password == response[i]["Password"]) {
              this.appComponent.typeUser="administrador";
              this.appComponent.trueLogged();
              this.router.navigate(['../centro']);
              break;
            } else {
              alert("Usuario o contraseña incorrecto!");
            }
          }
        }
      })

    } else {
      this.service.getPacientes().subscribe(response => {
        console.log('Raaaaaesponse is ', response);
        for (var i = 0; i < response["length"]; i++) {
          if (user == response[i]["CodigoUsuario"]) {
            if (password == response[i]["Password"]) {
              this.appComponent.typeUser="paciente";
              this.appComponent.trueLogged();
              this.router.navigate(['../centro']);
              break;
            } else {
              alert("Usuario o contraseña incorrecto!");
            }
          }
        }
      })
    }

  }

}
