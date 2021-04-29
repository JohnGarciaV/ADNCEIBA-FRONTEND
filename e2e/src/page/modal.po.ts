import { by, element, browser, ExpectedConditions, ProtractorExpectedConditions } from "protractor";

export class Modal {

  until: ProtractorExpectedConditions;
  private inputValorizacion = element(by.id("valorizacion"));
  private inputMinutosJugados = element(by.id("minutosJugados"));
  private inputTorneoGanados = element(by.id("torneoGanados"));
  private inputGoles = element(by.id("goles"));  
  private botonCerrarModal = element(by.id("botonRegresarModal"));
  private botonRegistrarModal= element(by.id("registrarModal"));
  
  constructor() {
    this.until = ExpectedConditions;
  }

  async clickInputValorizacion() {      
    browser.wait(
      this.until.presenceOf(this.inputValorizacion),
      10000, `El elemento inputValorizacionModal esta tardando mucho en aparecer en el DOM`
    );
    await this.inputValorizacion.click();
  }
  async clickInputMinutosJugados() {
    browser.wait(
      this.until.presenceOf(this.inputMinutosJugados),
      10000, `El elemento inputMinutosJugadosModal esta tardando mucho en aparecer en el DOM`
    );
    await this.inputMinutosJugados.click();
  }
  async clickInputTorneoGanados() {
    browser.wait(
      this.until.presenceOf(this.inputTorneoGanados),
      10000, `El elemento inputTorneoGanadosModal esta tardando mucho en aparecer en el DOM`
    );
    await this.inputTorneoGanados.click(); 
  }
  async clickInputGoles() {
    browser.wait(
      this.until.presenceOf(this.inputGoles),
      10000, `El elemento inputGolesModal esta tardando mucho en aparecer en el DOM`
    );
    await  this.inputGoles.click();      
  }
  async setInputValorizacion(valorizacion: number) {     
    browser.wait(
      this.until.presenceOf(this.inputValorizacion),
      10000, `El elemento inputValorizacionModal esta tardando mucho en aparecer en el DOM`
    );
    await this.inputValorizacion.sendKeys(valorizacion);
  }
  async setInputMinutosJugados(minutosJugados: number) {
    browser.wait(
      this.until.presenceOf(this.inputMinutosJugados),
      10000, `El elemento inputMinutosJugadosModal esta tardando mucho en aparecer en el DOM`
    );
    await this.inputMinutosJugados.sendKeys(minutosJugados);
  }
  async setInputTorneoGanados(torneoGanados: number) {
    browser.wait(
      this.until.presenceOf(this.inputTorneoGanados),
      10000, `El elemento inputTorneoGanadosModal esta tardando mucho en aparecer en el DOM`
    );
   await this.inputTorneoGanados.sendKeys(torneoGanados);
  }
  async setInputGoles(goles: number) {
    browser.wait(
      this.until.presenceOf(this.inputGoles),
      5000, `El elemento inputGolesModal esta tardando mucho en aparecer en el DOM`
    );
    await this.inputGoles.sendKeys(goles);
  }
  async limpiarValorizacion() {   
    await this.inputValorizacion.clear();
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

  async clickBotonCerrarModalValorizar() {
    browser.wait(
      this.until.presenceOf(this.botonCerrarModal),
      5000, `El elemento botonCerrarModal esta tardando mucho en aparecer en el DOM`
    );
    await this.botonCerrarModal.click();      
  }
  async clickBotonRegistrarModal() {
    browser.wait(
      this.until.presenceOf(this.botonRegistrarModal),
      5000, `El elemento botonRegistrarModal esta tardando mucho en aparecer en el DOM`
    );
    await this.botonRegistrarModal.click();    
  }
}
  