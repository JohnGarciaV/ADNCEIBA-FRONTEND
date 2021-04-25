import { by, element } from "protractor";

export class VerDetalles {

    private botonAbrirModalValorizar= element(by.id("modalValorizar"));
    private botonAbrirModalCalificar = element(by.id("modalCalificar"));
    private botonCerrarModalValorizar = element(by.id("modalValorizarVerJugadores"));
    private botonCerrarModalCalificar = element(by.id("modalCalificarVerJugadores"));
    private botonRegistrarValorizacion= element(by.id("registrarValorizar"));
    private botonRegistrarCalificar = element(by.id("registrarCalificar"));
    private inputValorizacion = element(by.id("valorizacion"));
    private inputMinutosJugados = element(by.id("minutosJugados"));
    private inputTorneoGanados = element(by.id("torneoGanados"));
    private inputGoles = element(by.id("goles"));
    private swal = element(by.className('swal2-html-container'));
  
    async clickInputValorizacion() {
        await this.inputValorizacion.click();
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

    async setInputValorizacion(valorizacion: number) {
        await this.inputValorizacion.sendKeys(valorizacion);
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

      async clickBotonAbrirModalValorizar() {
        await this.botonAbrirModalValorizar.click();
      }

      async clickBotonAbrirModalCalificar() {
        await this.botonAbrirModalCalificar.click();
      }

      async clickBotonCerrarModalValorizar() {
        await this.botonCerrarModalValorizar.click();
      }

      async clickBotonCerrarModalCalificar() {
        await this.botonCerrarModalCalificar.click();
      }
      async clickBotonRegistrarValorizacion() {
        await this.botonRegistrarValorizacion.click();
      }
      async clickBotonRegistrarCalificar() {
        await this.botonRegistrarCalificar.click();
      }
      async getTextoSwal(): Promise<string> {
        return await this.swal.getText();
      }
  }
  