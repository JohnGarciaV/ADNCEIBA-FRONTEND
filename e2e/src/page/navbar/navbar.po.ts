import { by, element } from "protractor";

export class NavbarPage { 
  private botonJugadores = element(by.id("jugadoresNav"));

  async clickBotonNavBarJugadores() {
    await this.botonJugadores.click();
  }
}
