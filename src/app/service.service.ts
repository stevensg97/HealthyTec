import { Injectable } from '@angular/core';
import { CentroAtencion } from './models/CentroAtencion'
import { Citas } from './models/Citas'
import { Pacientes } from './models/Pacientes'
import { Enfermedades } from './models/Enfermedades'
import { Tratamiento } from './models/Tratamiento'
import { Funcionario } from './models/Funcionario'
import { Nombre } from './models/nombre'
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable()
export class ServiceService {
  CentroAtencionPost: CentroAtencion;
  CitaPost: Citas;
  PacientePost: Pacientes;
  EnfermedadesPost: Enfermedades;
  TratamientoPost: Tratamiento;


  funcionarioPost: Funcionario;
  uri = "http://localhost:4000/";

  constructor(private httpClient: HttpClient) { }

  postFuncionario(funcionario: Funcionario) {
    console.log(funcionario.NombreCompleto);
    return this.httpClient.post<Funcionario>(this.uri + "funcionario/add", funcionario);
  }

  updateFuncionario(funcionario: Funcionario, id: string) {
    console.log(funcionario.NombreCompleto);
    return this.httpClient.post<Funcionario>(this.uri + "funcionario/update/" + id, funcionario);
  }

  deleteFuncionario(id: string) {
    return this.httpClient.get(this.uri + "funcionario/delete/" + id);
  }

  getFuncionarios() {
    return this.httpClient.get(this.uri + "funcionarios");
  }

  postCentroAtencion(CentroAtencion: CentroAtencion) {
    console.log(CentroAtencion.Nombre);
    return this.httpClient.post<CentroAtencion>(this.uri + "CentroAtencion/add", CentroAtencion);
  }

  updateCentroAtencion(CentroAtencion: CentroAtencion, id: string) {
    console.log(CentroAtencion.Nombre);
    return this.httpClient.post<CentroAtencion>(this.uri + "CentroAtencion/update/" + id, CentroAtencion);
  }

  deleteCentroAtencion(id: string) {
    return this.httpClient.get(this.uri + "CentroAtencion/delete/" + id);
  }

  getCentroAtenciones() {
    return this.httpClient.get(this.uri + "CentroAtenciones");
  }

  postDiagnostico(enfermedades: Enfermedades) {
    console.log(enfermedades.Sintomas);
    return this.httpClient.post<Enfermedades>(this.uri + "diagnostico/add", enfermedades);
  }

  updateDiagnostico(enfermedades: Enfermedades, id: string) {
    console.log(enfermedades);
    return this.httpClient.post<Enfermedades>(this.uri + "diagnostico/update/" + id, enfermedades);
  }

  deleteDiagnostico(id: string) {
    return this.httpClient.get(this.uri + "diagnostico/delete/" + id);
  }

  getDiagnosticos() {
    return this.httpClient.get(this.uri + "diagnosticos");
  }

  postTratamiento(tratamiento: Tratamiento) {
    console.log(tratamiento);
    return this.httpClient.post<Tratamiento>(this.uri + "tratamiento/add", tratamiento);
  }

  updateTratamiento(tratamiento: Tratamiento, id: string) {
    console.log(tratamiento.Nombre);
    return this.httpClient.post<Tratamiento>(this.uri + "tratamiento/update/" + id, tratamiento);
  }

  deleteTratamiento(id: string) {
    return this.httpClient.get(this.uri + "tratamiento/delete/" + id);
  }

  getTratamientos() {
    return this.httpClient.get(this.uri + "tratamientos");
  }

  postPaciente(paciente: Pacientes) {
    console.log(paciente);
    return this.httpClient.post<Pacientes>(this.uri + "paciente/add", paciente);
  }

  updatePaciente(Paciente: Pacientes, id: string) {
    console.log(Paciente.NombreCompleto);
    return this.httpClient.post<Pacientes>(this.uri + "Paciente/update/" + id, Paciente);
  }

  deletePaciente(id: string) {
    return this.httpClient.get(this.uri + "Paciente/delete/" + id);
  }

  getPacientes() {
    return this.httpClient.get(this.uri + "pacientes");
  }

  postCita(cita: Citas) {
    //console.log(Cita.Nombre);
    return this.httpClient.post<Citas>(this.uri + "cita/add", cita);
  }

  updateCita(Cita: Citas, id: string) {
    //console.log(Cita.Nombre);
    return this.httpClient.post<Citas>(this.uri + "cita/update/" + id, Cita);
  }

  deleteCita(id: string) {
    return this.httpClient.get(this.uri + "cita/delete/" + id);
  }

  getCitas() {
    return this.httpClient.get(this.uri + "citas");
  }

  getCitasByDate(fechas: string) {
    return this.httpClient.get(this.uri + "cantidadcitas/" + fechas);
  }

  getCitasByCond(condicion: string) {
    return this.httpClient.get(this.uri + "cantidadcitas/" + condicion + "/0");
  }

  getCitasById(id: string) {
    return this.httpClient.get(this.uri + "cita/" + id);
  }

  getCitasByDate(fechas: string) {
    return this.httpClient.get(this.uri + "cantidadcitas/" + fechas);
  }

  getCitasByCond(condicion: string) {
    return this.httpClient.get(this.uri + "cantidadcitas/" + condicion + "/0");
  }

  getReporteTratamientos() {
    return this.httpClient.get(this.uri + "tratamientosasignados");
  }

  getReporteDiagnosticos() {
    return this.httpClient.get(this.uri + "rangoenfermedades");
  }

  getReporteEnfermedades() {
    return this.httpClient.get(this.uri + "masdiagnosticadas");
  }

  getTresPacientes() {
    return this.httpClient.get(this.uri + "cantidadcitas/0/0");
  }

  getCantidadCitas(condicion: string) {
    return this.httpClient.get(this.uri + "cantidadcitas/" + condicion +"/0");
  }

  getCantidadCitasFecha(fechas: string) {
    return this.httpClient.get(this.uri + "cantidadcitas/" + fechas);
  }
}
