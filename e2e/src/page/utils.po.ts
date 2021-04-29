import { browser, ElementFinder, ExpectedConditions, ProtractorExpectedConditions } from "protractor";

export class Util {
    until: ProtractorExpectedConditions;
  
   constructor() {
    this.until = ExpectedConditions;
   }

   async validarDisponibilidadItemClick(element: ElementFinder){
    const id = await element.getId();
     try{           
        return await browser.wait(
            this.until.presenceOf(element),
            5000,
            `El elemento ${id} esta tardando mucho en aparecer en el DOM`
        );
    }catch(err){
      console.log(`No se puede dar click en el id: ${id}`);
    }
  }

  async validarDisponibilidadInputClean(element: ElementFinder){   
    return await browser.wait(this.until.presenceOf(element),
    5000,
    `El elemento ${element} tarda en renderizarse en el DOM`);   
  }

  async validarDisponibilidadSendKeysAndData(element: ElementFinder){   
    return await browser.wait(this.until.presenceOf(element),
    5000,
    `El elemento ${element} tarda en renderizarse en el DOM`);    
  }

}