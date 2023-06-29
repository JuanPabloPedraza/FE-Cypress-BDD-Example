import { performActionOnElement } from '../support/commonActions.js';

class HumanPage {
    elements = {
      agregarTitularesBtn: () => cy.get('[aria-label="Agregar nuevo"] > .MuiBox-root > .MuiButton-root'),
      agregarCuentasBancariasBtn: () => cy.xpath('(//div[@class="MuiBox-root css-aswqvx"])[2]'),
      agregarPerfilInversor: () => cy.get('.mb-48 > :nth-child(3) > .flex > .MuiBox-root > .MuiButton-root'),
      aceptarTerminosBtn: () => cy.xpath('/html/body/div[1]/div/div[3]/div[1]/div[5]/div[1]/label/span[1]'),
      aceptarPoliticaBtn: ()  =>cy.xpath('/html/body/div[1]/div/div[3]/div[1]/div[5]/div[2]/label/span[1]'),
      abrirCuentaBtn: () => cy.get('.css-fv3lde > .MuiButton-root')
    };
  
    clickAgregarTitularesBtn() {
      performActionOnElement(this.elements.agregarTitularesBtn, 'click');
    }
  
    clickAgregarCuentaBancariaBtn() {
      performActionOnElement(this.elements.agregarCuentasBancariasBtn, 'click');
    }
  
    clickAgregarPerfilInversorBtn() {
      performActionOnElement(this.elements.agregarPerfilInversor, 'click');
    }
  
    clickAceptarTerminosBtn() {
      performActionOnElement(this.elements.aceptarTerminosBtn, 'click');
    }
  
    clickAceptarPoliticaBtn() {
      performActionOnElement(this.elements.aceptarPoliticaBtn, 'click');
    }
  
    clickAbrirCuentaBtn() {
      performActionOnElement(this.elements.abrirCuentaBtn, 'click');
    }
  }
  
  export const humanPage = new HumanPage();
  