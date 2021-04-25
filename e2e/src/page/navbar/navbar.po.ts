import { by, element } from "protractor";

export class NavbarPage {
  private botonHome = element(by.id("homeNav"));
  private botonJugadores = element(by.id("jugadoresNav"));

  async clickBotonNavBarHome() {
    await this.botonHome.click();
  }
  async clickBotonNavBarJugadores() {
    await this.botonJugadores.click();
  }
}
