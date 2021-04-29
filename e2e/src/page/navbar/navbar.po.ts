import { by, element, browser, ExpectedConditions, ProtractorExpectedConditions } from "protractor";


export class NavbarPage { 
  private botonJugadores = element(by.id("jugadoresNav"));
  until: ProtractorExpectedConditions;
    
  constructor() {
    this.until = ExpectedConditions;
   }

  async clickBotonNavBarJugadores() {
    browser.wait(
      this.until.presenceOf(this.botonJugadores),
      5000, `El elemento botonJugadores esta tardando mucho en aparecer en el DOM`
    );
    await this.botonJugadores.click(); 
  }
}
