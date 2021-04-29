import { by, element, browser, ExpectedConditions, ProtractorExpectedConditions } from "protractor";

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
  
  until: ProtractorExpectedConditions;

  constructor() {
    this.until = ExpectedConditions;
   }

  async clickInputNombre() {
    browser.wait(
      this.until.presenceOf(this.inputNombre),
      5000, `El elemento inputNombre esta tardando mucho en aparecer en el DOM`
    );
    this.inputNombre.click();
  }

  async clickInputNumeroIdentificacion() {
    browser.wait(
      this.until.presenceOf(this.inputNumeroIdentificacion),
      5000, `El elemento id inputNumeroIdentificacion esta tardando mucho en aparecer en el DOM`
    );
    this.inputNumeroIdentificacion.click();
  }

  async clickInputEdad() {
    browser.wait(
      this.until.presenceOf(this.inputEdad),
      5000, `El elemento inputEdad esta tardando mucho en aparecer en el DOM`
    );
    this.inputEdad.click();
  }

  async clickInputValorizacion() {
    browser.wait(
      this.until.presenceOf(this.inputValorizacion),
      5000, `El elemento inputValorizacion esta tardando mucho en aparecer en el DOM`
    );
    this.inputValorizacion.click();
  }

  async clickInputFechaInicioTemporada() {
    browser.wait(
      this.until.presenceOf(this.inputFechaInicioTemporada),
      5000, `El elemento inputFechaInicioTemporada esta tardando mucho en aparecer en el DOM`
    );
    this.inputFechaInicioTemporada.click();
  }

  async clickInputFechaFinTemporada() {
    browser.wait(
      this.until.presenceOf(this.inputFechaFinTemporada),
      5000, `El elemento inputFechaFinTemporada esta tardando mucho en aparecer en el DOM`
    );
    this.inputFechaFinTemporada.click();
  }

  async clickInputFechaValorizacion() {
    browser.wait(
      this.until.presenceOf(this.inputFechaValorizacion),
      5000, `El elemento inputFechaValorizacion esta tardando mucho en aparecer en el DOM`
    );
    this.inputFechaValorizacion.click();
  }

  async clickInputEquipoFutbol() {
    browser.wait(
      this.until.presenceOf(this.inputEquipoFutbol),
      5000, `El elemento inputEquipoFutbol esta tardando mucho en aparecer en el DOM`
    );
    this.inputEquipoFutbol.click();
  }

  async clickInputMinutosJugados() {
    browser.wait(
      this.until.presenceOf(this.inputMinutosJugados),
      5000, `El elemento inputMinutosJugados esta tardando mucho en aparecer en el DOM`
    );
    this.inputMinutosJugados.click();
  }

  async clickInputTorneoGanados() {
    browser.wait(
      this.until.presenceOf(this.inputTorneoGanados),
      5000, `El elemento inputTorneoGanados esta tardando mucho en aparecer en el DOM`
    );
    this.inputTorneoGanados.click();
  }

  async clickInputGoles() {
    browser.wait(
      this.until.presenceOf(this.inputGoles),
      5000, `El elemento inputGoles esta tardando mucho en aparecer en el DOM`
    );
    this.inputGoles.click();
  }

  async clickInputCalificacion() {
    browser.wait(
      this.until.presenceOf(this.inputCalificacion),
      5000, `El elemento inputCalificacion esta tardando mucho en aparecer en el DOM`
    );
    this.inputCalificacion.click();
  }

  async setInputNombre(nombre: string) {
    browser.wait(
      this.until.presenceOf(this.inputNombre),
      5000, `El elemento inputNombre esta tardando mucho en aparecer en el DOM`
    );
    this.inputNombre.sendKeys(nombre);
  }
  async setInputNumeroIdentificacion(numeroIdentificacion: number) {
    browser.wait(
      this.until.presenceOf(this.inputNumeroIdentificacion),
      5000, `El elemento inputNombre esta tardando mucho en aparecer en el DOM`
    );
    this.inputNumeroIdentificacion.sendKeys(numeroIdentificacion);
  }
  async setInputEdad(edad: number) {
    browser.wait(
      this.until.presenceOf(this.inputEdad),
      5000, `El elemento inputEdad esta tardando mucho en aparecer en el DOM`
    );
    this.inputEdad.sendKeys(edad);
  }

  async setInputValorizacion(valorizacion: number) {
    browser.wait(
      this.until.presenceOf(this.inputValorizacion),
      5000, `El elemento inputEdad esta tardando mucho en aparecer en el DOM`
    );
    this.inputValorizacion.sendKeys(valorizacion);
  }
  async setInputFechaInicioTemporada(fechaInicioTemporada: string) {
    browser.wait(
      this.until.presenceOf(this.inputFechaInicioTemporada),
      5000, `El elemento inputFechaInicioTemporada esta tardando mucho en aparecer en el DOM`
    );
    this.inputFechaInicioTemporada.sendKeys(fechaInicioTemporada);
  }
  async setInputFechaFinTemporada(fechaFinTemporada: string) {
    browser.wait(
      this.until.presenceOf(this.inputFechaFinTemporada),
      5000, `El elemento inputFechaInicioTemporada esta tardando mucho en aparecer en el DOM`
    );
    this.inputFechaFinTemporada.sendKeys(fechaFinTemporada);
  }
  async setInputFechaValorizacion(fechaValorizacion: string) {
    browser.wait(
      this.until.presenceOf(this.inputFechaValorizacion),
      5000, `El elemento inputFechaInicioTemporada esta tardando mucho en aparecer en el DOM`
    );
    this.inputFechaValorizacion.sendKeys(fechaValorizacion);
  }
  async setInputEquipoFutbol(equipoFutbol: string) {
    browser.wait(
      this.until.presenceOf(this.inputEquipoFutbol),
      5000, `El elemento inputFechaInicioTemporada esta tardando mucho en aparecer en el DOM`
    );
    this.inputEquipoFutbol.sendKeys(equipoFutbol);
  }
  async setInputMinutosJugados(minutosJugados: number) {
    browser.wait(
      this.until.presenceOf(this.inputMinutosJugados),
      5000, `El elemento inputMinutosJugados esta tardando mucho en aparecer en el DOM`
    );
    this.inputMinutosJugados.sendKeys(minutosJugados);
  }
  async setInputTorneoGanados(torneoGanados: number) {
    browser.wait(
      this.until.presenceOf(this.inputTorneoGanados),
      5000, `El elemento inputMinutosJugados esta tardando mucho en aparecer en el DOM`
    );
    this.inputTorneoGanados.sendKeys(torneoGanados);
  }
  async setInputGoles(goles: number) {
    browser.wait(
      this.until.presenceOf(this.inputGoles),
      5000, `El elemento inputMinutosJugados esta tardando mucho en aparecer en el DOM`
    );
    this.inputGoles.sendKeys(goles);
  }
  async setInputCalificacion(calificacion: number) {
    browser.wait(
      this.until.presenceOf(this.inputCalificacion),
      5000, `El elemento inputCalificacion esta tardando mucho en aparecer en el DOM`
    );
    this.inputCalificacion.sendKeys(calificacion);
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
    browser.wait(
      this.until.presenceOf(this.botonRegistrarJugador),
      5000, `El elemento botonRegistrarJugador esta tardando mucho en aparecer en el DOM`
    );
    await this.botonRegistrarJugador.click();
  }

  async getTextoSwal(): Promise<string> {
    return await this.swal.getText();
  }

}
