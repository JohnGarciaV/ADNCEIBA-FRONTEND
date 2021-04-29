import { by, element, browser, ExpectedConditions, ProtractorExpectedConditions } from "protractor";
//import { Util } from '../utils.po';

export class GridJugadores {
    private cardJugador = element.all(by.className("card"));
    private botonCrearJugador = element(by.id("linkCrearJugador"));
    private verDetalleJugador = element(by.id("linkVerDetalles2"));
    
    until: ProtractorExpectedConditions;

  constructor() {
    this.until = ExpectedConditions;
   }
  
    async contarJugadores() {
      return this.cardJugador.count();
    }  
    async clickBotonCrearJugador() {
      browser.wait(
        this.until.presenceOf(this.botonCrearJugador),
        5000, `El elemento inputNombre esta tardando mucho en aparecer en el DOM`
      );
      this.botonCrearJugador.click(); 
    }  
    async clickVerDetalleJugador() {
      browser.wait(
        this.until.presenceOf(this.verDetalleJugador),
        5000, `El elemento inputNombre esta tardando mucho en aparecer en el DOM`
      );
      this.verDetalleJugador.click();
    }
  }
  