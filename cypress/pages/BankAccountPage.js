import { performActionOnElement } from '../support/commonActions.js';

class BankAccountPage {
    elements = {
      bancoNacionalBtn: () => cy.xpath('//p[text()="Cuenta bancaria Nacional"]'),
      inputCBU: () => cy.xpath('//input[@name="routing"]'),
      selectBank: () => cy.xpath('(//*[name()="svg"][@class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"])[1]'),
      atentionConfirmBtn: () => cy.xpath('//button[text()="Confirmar"]'),
      optionBank: () => cy.xpath('//li[text()="Brubank"]'),
      selectTypeAccount: () => cy.xpath('(//*[name()="svg"][@class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"])[2]'),
      optionTypeAccount: () => cy.xpath('//li[text()="Billetera"]'),
      selectCurrency: () => cy.xpath('(//*[name()="svg"][@class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"])[3]'),
      optionCurrency: () => cy.xpath('//li[text()="ARS - Pesos Argentinos"]'),
      continuarBtn: () => cy.get('.justify-end > .MuiButton-contained')

    };
    
    clickBancoNacionalBtn() {
      performActionOnElement(this.elements.bancoNacionalBtn, 'click');
    }
  
    typeInputCbuBtn(cbu) {
      performActionOnElement(this.elements.inputCBU, 'type', cbu);
    }
  
    clickAtentionConfirmBtn() {
      performActionOnElement(this.elements.atentionConfirmBtn, 'click');
    }
  
    clickSelectBankBtn() {
      performActionOnElement(this.elements.selectBank, 'click');
    }
  
    clickOptionBank() {
      performActionOnElement(this.elements.optionBank, 'click');
    }
  
    clickSelectTypeAccountBtn() {
      performActionOnElement(this.elements.selectTypeAccount, 'click');
    }
  
    clickOptionTypeAccountBtn() {
      performActionOnElement(this.elements.optionTypeAccount, 'click');
    }

    clickSelectCurrency() {
      performActionOnElement(this.elements.selectCurrency, 'click');
    }
  
    clickOptionCurrency() {
      performActionOnElement(this.elements.optionCurrency, 'click');
    }
  
    clickContinuarBtn() {
      performActionOnElement(this.elements.continuarBtn, 'click');
    }
    
  }
  
  export const bankAccountPage = new BankAccountPage();
  