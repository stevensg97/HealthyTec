import { Injectable } from '@angular/core';
import { FuncionarioCompleto } from './models/FuncionarioCompleto'
import { Funcionario } from './models/Funcionario'
import { Nombre } from './models/nombre'
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable()
export class ServiceService {
  funcionarioPost: FuncionarioCompleto;
  uri = "http://localhost:4000/";

  constructor(private httpClient: HttpClient) { }

  postFuncionario(funcionario: FuncionarioCompleto) {
    console.log(funcionario.NombreCompleto);
    return this.httpClient.post<FuncionarioCompleto>(this.uri + "funcionario/add", funcionario);
  }

  updateFuncionario(funcionario: FuncionarioCompleto, id: string) {
    console.log(funcionario.NombreCompleto);
    return this.httpClient.post<FuncionarioCompleto>(this.uri + "funcionario/update/"+ id, funcionario);
  }

  deleteFuncionario(id: string) {
    return this.httpClient.get(this.uri + "funcionario/delete/"+ id);
  }

  getFuncionarios(){
    return this.httpClient.get(this.uri + "funcionarios");
  }
}
