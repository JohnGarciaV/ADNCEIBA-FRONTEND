import { by, element } from "protractor";

export class GridJugadores {
    private cardJugador = element.all(by.className("card"));
    private botonCrearJugador = element(by.id("linkCrearJugador"));
    private verDetalleJugador = element(by.id("linkVerDetalles2"));
  
    async contarJugadores() {
      return this.cardJugador.count();
    }  
    async clickBotonCrearJugador() {
      await this.botonCrearJugador.click();
    }  
    async clickVerDetalleJugador() {
      await this.verDetalleJugador.click();
    }
  }
  