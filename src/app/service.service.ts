import { Injectable } from '@angular/core';
import { FuncionarioCompleto } from './models/FuncionarioCompleto'
import { CentroAtencion } from './models/CentroAtencion'
import { Citas} from './models/Citas'
import { Pacientes} from './models/Pacientes'
import { Enfermedades } from './models/Enfermedades'
import { Tratamiento} from './models/Tratamiento'
import { Nombre } from './models/nombre'
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable()
export class ServiceService {
  funcionarioPost: FuncionarioCompleto;
  CentroAtencionPost: CentroAtencion;
  CitaPost: Citas;
  PacientePost: Pacientes;
  EnfermedadesPost: Enfermedades;
  TratamientoPost: Tratamiento;
  

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

  postEnfermedades(Enfermedades: Enfermedades) {
    console.log(Enfermedades.Nombre);
    return this.httpClient.post<Enfermedades>(this.uri + "Enfermedades/add", Enfermedades);
  }

  updateEnfermedades(Enfermedades: Enfermedades, id: string) {
    console.log(Enfermedades.Nombre);
    return this.httpClient.post<Enfermedades>(this.uri + "Enfermedades/update/"+ id, Enfermedades);
  }

  deleteEnfermedades(id: string) {
    return this.httpClient.get(this.uri + "Enfermedades/delete/"+ id);
  }

  getEnfermedadess(){
    return this.httpClient.get(this.uri + "Enfermedadess");
  }

  postCita(Cita: Citas) {
    //console.log(Cita.Nombre);
    return this.httpClient.post<Citas>(this.uri + "Cita/add", Cita);
  }

  updateCita(Cita: Citas, id: string) {
    //console.log(Cita.Nombre);
    return this.httpClient.post<Citas>(this.uri + "Cita/update/"+ id, Cita);
  }

  deleteCita(id: string) {
    return this.httpClient.get(this.uri + "Cita/delete/"+ id);
  }

  getCitas(){
    return this.httpClient.get(this.uri + "Citas");
  }
  postCentroAtencion(CentroAtencion: CentroAtencion) {
    console.log(CentroAtencion.Nombre);
    return this.httpClient.post<CentroAtencion>(this.uri + "CentroAtencion/add", CentroAtencion);
  }

  updateCentroAtencion(CentroAtencion: CentroAtencion, id: string) {
    console.log(CentroAtencion.Nombre);
    return this.httpClient.post<CentroAtencion>(this.uri + "CentroAtencion/update/"+ id, CentroAtencion);
  }

  deleteCentroAtencion(id: string) {
    return this.httpClient.get(this.uri + "CentroAtencion/delete/"+ id);
  }

  getCentroAtenciones(){
    return this.httpClient.get(this.uri + "CentroAtenciones");
  }

  postTratamiento(Tratamiento: Tratamiento) {
    console.log(Tratamiento.Nombre);
    return this.httpClient.post<Tratamiento>(this.uri + "Tratamiento/add", Tratamiento);
  }

  updateTratamiento(Tratamiento: Tratamiento, id: string) {
    console.log(Tratamiento.Nombre);
    return this.httpClient.post<Tratamiento>(this.uri + "Tratamiento/update/"+ id, Tratamiento);
  }

  deleteTratamiento(id: string) {
    return this.httpClient.get(this.uri + "Tratamiento/delete/"+ id);
  }

  getTratamientos(){
    return this.httpClient.get(this.uri + "Tratamientos");
  }

  postPaciente(Paciente: Pacientes) {
    console.log(Paciente.Nombre);
    return this.httpClient.post<Pacientes>(this.uri + "Paciente/add", Paciente);
  }

  updatePaciente(Paciente: Pacientes, id: string) {
    console.log(Paciente.Nombre);
    return this.httpClient.post<Pacientes>(this.uri + "Paciente/update/"+ id, Paciente);
  }

  deletePaciente(id: string) {
    return this.httpClient.get(this.uri + "Paciente/delete/"+ id);
  }

  getPacientes(){
    return this.httpClient.get(this.uri + "Pacientes");
  }
}
