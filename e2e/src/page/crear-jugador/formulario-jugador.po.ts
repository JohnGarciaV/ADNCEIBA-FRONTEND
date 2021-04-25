import { by, element } from "protractor";

export class FormularioJugador {
  private botonRegistrarJugador = element(by.id("registrar"));
  private inputNombre = element(by.id("nombre"));
  private inputNumeroIdentificacion = element(by.id("numeroIdentificacion"));
  private inputEdad = element(by.id("edad"));
  private inputValorizacion = element(by.id("valorizacion"));
  private inputFechaInicioTemporada = element(by.id("fechaInicioTemporada"));
  private inputFechaFinTemporada = element(by.id("fechaFinTemporada"));
  private inputFechaValorizacion = element(by.id("fechaValorizacion"));
  private inputEquipoFutbol = element(by.id("equipoFutbol"));
  private inputMinutosJugados= element(by.id("minutosJugados"));
  private inputTorneoGanados= element(by.id("torneoGanados"));
  private inputGoles= element(by.id("goles"));
  private inputCalificacion= element(by.id("calificacion"));
  
  private swal = element(by.className('swal2-html-container'));

  async clickInputNombre() {
    await this.inputNombre.click();
  }
  async clickInputNumeroIdentificacion() {
    await this.inputNumeroIdentificacion.click();
  }
  async clickInputEdad() {
    await this.inputEdad.click();
  }
  async clickInputValorizacion() {
    await this.inputValorizacion.click();
  }
  async clickInputFechaInicioTemporada() {
    await this.inputFechaInicioTemporada.click();
  }
  async clickInputFechaFinTemporada() {
    await this.inputFechaFinTemporada.click();
  }
  async clickInputFechaValorizacion() {
    await this.inputFechaValorizacion.click();
  }
  async clickInputEquipoFutbol() {
    await this.inputEquipoFutbol.click();
  }
  async clickInputMinutosJugados() {
    await this.inputMinutosJugados.click();
  }
  async clickInputTorneoGanados() {
    await this.inputTorneoGanados.click();
  }
  async clickInputGoles() {
    await this.inputGoles.click();
  }
  async clickInputCalificacion() {
    await this.inputCalificacion.click();
  }
  async setInputNombre(nombre: string) {
    await this.inputNombre.sendKeys(nombre);
  }
  async setInputNumeroIdentificacion(numeroIdentificacion: number) {
    await this.inputNumeroIdentificacion.sendKeys(numeroIdentificacion);
  }
  async setInputEdad(edad: number) {
    await this.inputEdad.sendKeys(edad);
  }
  async setInputValorizacion(valorizacion: number) {
    await this.inputValorizacion.sendKeys(valorizacion);
  }
  async setInputFechaInicioTemporada(fechaInicioTemporada: string) {
    await this.inputFechaInicioTemporada.sendKeys(fechaInicioTemporada);
  }
  async setInputFechaFinTemporada(fechaFinTemporada: string) {
    await this.inputFechaFinTemporada.sendKeys(fechaFinTemporada);
  }
  async setInputFechaValorizacion(fechaValorizacion: string) {
    await this.inputFechaValorizacion.sendKeys(fechaValorizacion);
  }
  async setInputEquipoFutbol(equipoFutbol: string) {
    await this.inputEquipoFutbol.sendKeys(equipoFutbol);
  }
  async setInputMinutosJugados(minutosJugados: number) {
    await this.inputMinutosJugados.sendKeys(minutosJugados);
  }
  async setInputTorneoGanados(torneoGanados: number) {
    await this.inputTorneoGanados.sendKeys(torneoGanados);
  }
  async setInputGoles(goles: number) {
    await this.inputGoles.sendKeys(goles);
  }
  async setInputCalificacion(calificacion: number) {
    await this.inputCalificacion.sendKeys(calificacion);
  }  
  async limpiarInputNombre() {
    await this.inputNombre.clear();
  }
  async limpiarInputModelo() {
    await this.inputNumeroIdentificacion.clear();
  }
  async limpiarEdad() {
    await this.inputEdad.clear();
  }
  async limpiarValorizacion() {
    await this.inputValorizacion.clear();
  }
  async limpiarFechaInicioTemporada() {
    await this.inputFechaInicioTemporada.clear();
  }
  async limpiarFechaFinTemporada() {
    await this.inputFechaFinTemporada.clear();
  }
  async limpiarFechaValorizacion() {
    await this.inputFechaValorizacion.clear();
  }
  async limpiarEquipoFutbol() {
    await this.inputEquipoFutbol.clear();
  }
  async limpiarMinutosJugados() {
    await this.inputMinutosJugados.clear();
  }
  async limpiarTorneoGanados() {
    await this.inputTorneoGanados.clear();
  }
  async limpiarGoles() {
    await this.inputGoles.clear();
  }
  async limpiarCalificacion() {
    await this.inputCalificacion.clear();
  }


  async clickBotonRegistrarJugador() {
    await this.botonRegistrarJugador.click();
  }

  async getTextoSwal(): Promise<string> {
    return await this.swal.getText();
  }
}
