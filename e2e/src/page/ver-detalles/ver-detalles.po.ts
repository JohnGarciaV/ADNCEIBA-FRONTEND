import { by, element, browser, ExpectedConditions, ProtractorExpectedConditions } from "protractor";


export class VerDetalles {

    private botonAbrirModalValorizar= element(by.id("modalValorizar"));
    private botonAbrirModalCalificar = element(by.id("modalCalificar"));
    
    private swal = element(by.className('swal2-html-container'));
    until: ProtractorExpectedConditions;

    constructor() {
      this.until = ExpectedConditions;
     }  
    
    async clickBotonAbrirModalValorizar() {
      browser.wait(
        this.until.presenceOf(this.botonAbrirModalValorizar),
        5000, `El elemento botonAbrirModalValorizar esta tardando mucho en aparecer en el DOM`
      );
      await this.botonAbrirModalValorizar.click();
    }
    async clickBotonAbrirModalCalificar() {
      browser.wait(
        this.until.presenceOf(this.botonAbrirModalCalificar),
        5000, `El elemento botonAbrirModalCalificar esta tardando mucho en aparecer en el DOM`
      );
      await this.botonAbrirModalCalificar.click();
    }   
    
    async getTextoSwal(): Promise<string> {
      return await this.swal.getText();
    }
  }
  