import { performActionOnElement } from '../support/commonActions.js';


class InvestorProfilePage {
    elements = {
      expEnInversionesBtn: () => cy.xpath('//div[@aria-label="Experiencia en inversiones"]//span[text()="Ninguna"]'),
      conocimientoMercadoBtn: () => cy.xpath('//div[@aria-label="Grado de Conocimiento de los instrumentos disponibles en el Mercado de Capitales"]//span[text()="Bajo"]'),
      operoEnBolsaBtn: () => cy.xpath('//div[@aria-label="Operó en bolsa"]//span[text()="No"]'),
      operoAccionesBtn: () => cy.xpath('//div[@aria-label="Operaste acciones?"]//span[text()="No"]'),
      continuarBtn: () => cy.xpath('(//button[normalize-space()="Continuar"])[1]'),
      confirmarBtn: () => cy.xpath('(//button[normalize-space()="Confirmar"])[1]')
    };


    clickExpEnInversionesBtn() {
      performActionOnElement(this.elements.expEnInversionesBtn, 'click');
    }
  
    clickConocimientoMercadoBtn() {
      performActionOnElement(this.elements.conocimientoMercadoBtn, 'click');
    }
  
    clickOperoEnBolsaBtn() {
      performActionOnElement(this.elements.operoEnBolsaBtn, 'click');
    }
  
    clickOperoAccionesBtn() {
      performActionOnElement(this.elements.operoAccionesBtn, 'click');
    }
  
    clickContinuarBtn() {
      performActionOnElement(this.elements.continuarBtn, 'click');
    }
  
    clickConfirmarBtn() {
      performActionOnElement(this.elements.confirmarBtn, 'click');
    }
  }
  
  export const investorProfilePage = new InvestorProfilePage();
  