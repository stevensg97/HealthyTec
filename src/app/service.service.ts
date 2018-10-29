import { Injectable } from '@angular/core';
import { Funcionario } from './models/Funcionario'
import { Enfermedades } from './models/Enfermedades'
import { Nombre } from './models/nombre'
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable()
export class ServiceService {
  funcionarioPost: Funcionario;
  uri = "http://localhost:4000/";

  constructor(private httpClient: HttpClient) { }

  postFuncionario(funcionario: Funcionario) {
    console.log(funcionario.NombreCompleto);
    return this.httpClient.post<Funcionario>(this.uri + "funcionario/add", funcionario);
  }

  updateFuncionario(funcionario: Funcionario, id: string) {
    console.log(funcionario.NombreCompleto);
    return this.httpClient.post<Funcionario>(this.uri + "funcionario/update/"+ id, funcionario);
  }

  deleteFuncionario(id: string) {
    return this.httpClient.get(this.uri + "funcionario/delete/"+ id);
  }

  getFuncionarios(){
    return this.httpClient.get(this.uri + "funcionarios");
  }

  postDiagnostico(enfermedades: Enfermedades) {
    console.log(enfermedades.Sintomas);
    return this.httpClient.post<Enfermedades>(this.uri + "diagnostico/add", enfermedades);
  }

  updateDiagnostico(enfermedades: Enfermedades, id: string) {
    console.log(enfermedades);
    return this.httpClient.post<Enfermedades>(this.uri + "diagnostico/update/"+ id, enfermedades);
  }

  getDiagnosticos(){
    return this.httpClient.get(this.uri + "diagnosticos");
  }
}
