import { performActionOnElement } from '../support/commonActions.js';

class OwnersPage {
    elements = {

      //Datos generales
      selectTipoDocumento: () => cy.get('.px-16 > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(1) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiAutocomplete-endAdornment'),
      firstOptionDNI: () => cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[3]/form[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[contains(@value, "DNI")]'),
      inputDNI: () => cy.xpath('//input[@name="id_number"]'),
      inputCUIL: () => cy.xpath('//input[@name="tax_id_number"]'),
      inputFirstName: () => cy.xpath('//input[@name="first_name"]'),
      inputLastName: () => cy.xpath('//input[@name="last_name"]'),
      selectNacionality: () => cy.xpath('(//*[name()="svg"][@class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"])[3]'),
      optionNacionalidad: () => cy.get(`:nth-child(8) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > input[value="Argentina"]`),
      selectGenero: () => cy.xpath('(//*[name()="svg"][@class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"])[4]'),
      optionGenero: () => cy.xpath('//li[contains(text(), "Masculino")]'),
      selectEstadoCivil: () => cy.xpath('(//*[name()="svg"][@class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"])[5]'),
      optionEstadoCivil: () => cy.xpath('//li[@data-option-index="0"]'),
      inputCalle: () => cy.xpath('//input[@name="addresses[0].street"]'),
      inputAltura: () => cy.xpath('//input[@name="addresses[0].number"]'),
      inputCodigoPostal: () => cy.xpath('//input[@name="addresses[0].zip_code"]'),

      //Datos de contacto
      inputEmail: () => cy.xpath('//input[@name="email"]'),
      inputPhone: () => cy.xpath('//input[@name="phone"]'),

      //Domicilio Legal
      selectPaisLegal: () => cy.xpath('(//*[name()="svg"][@class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"])[6]'),
      optionPaisLegal: () => cy.xpath('//li[contains(text(), "Argentina")]'),
      selectProvincia: () => cy.xpath('(//*[name()="svg"][@class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"])[7]'),
      optionProvincia: () => cy.xpath('//li[text()="Buenos Aires"]'),
      selectLocalidad: () => cy.xpath('//div[@class="MuiBox-root css-0"]//div[@class="MuiBox-root css-0"]//div[@class="MuiAutocomplete-root MuiAutocomplete-fullWidth MuiAutocomplete-hasPopupIcon css-1uvxhlw"]//button[@title="Open"]//*[name()="svg"]'),
      optionLocalidad: () => cy.xpath('//li[contains(text(), "12 DE AGOSTO")]'),

      //Datos laborales e impositivos
      selectActividadEco: () => cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[3]/form[1]/div[2]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/*[name()="svg"][1]'),
      optionActividadEco: () => cy.xpath('//li[contains(text(), "Sin Actividad Economica")]'),

      //Declaraciones Juradas
      noEsPepBtn: () => cy.xpath('//input[@name="es_pep"][@value="false"]'),
      noEsFactaBtn: () => cy.xpath('//input[@name="es_fatca"][@value="false"]'),
      noEsSoiBtn: () => cy.xpath('//input[@name="es_soi"][@value="false"]'),
      noCargoPublicoBtn: () => cy.xpath('//input[@name="ocupo_cargo_publico_en_ultimos_2_anios"][@value="false"]'),

      //Enviar formulario
      continuarBtn: () => cy.xpath('//button[@type="submit"]')
    };
    
  
    clickSelectDNI() {
      performActionOnElement(this.elements.selectTipoDocumento, 'click');
    }
  
    clickFirstOptionDNI() {
      performActionOnElement(this.elements.firstOptionDNI, 'click');
    }
  
    typeInputDNI(dni) {
      performActionOnElement(this.elements.inputDNI, 'type', dni);
    }
  
    typeInputCUIL(cuil) {
      performActionOnElement(this.elements.inputCUIL, 'type', cuil);
    }
  
    typeInputFirstName(firstName) {
      performActionOnElement(this.elements.inputFirstName, 'type', firstName);
    }
  
    typeInputLastName(lastName) {
      performActionOnElement(this.elements.inputLastName, 'type', lastName);
    }
  
    clickNationality() {
      performActionOnElement(this.elements.selectNacionality, 'click');
      performActionOnElement(this.elements.optionNacionalidad, 'click');
    }
  
    clickGenero() {
      performActionOnElement(this.elements.selectGenero, 'click');
      performActionOnElement(this.elements.optionGenero, 'click');
    }
  
    clickEstadoCivil() {
      performActionOnElement(this.elements.selectEstadoCivil, 'click');
      performActionOnElement(this.elements.optionEstadoCivil, 'click');
    }
    
    typeEmail(email) {
      performActionOnElement(this.elements.inputEmail, 'type', email);
    }
  
    typePhone(phone) {
      performActionOnElement(this.elements.inputPhone, 'type', phone);
    }
  
    clickPaisLegal() {
      performActionOnElement(this.elements.selectPaisLegal, 'click');
      performActionOnElement(this.elements.optionPaisLegal, 'click');
    }
  
    clickProvincia() {
      performActionOnElement(this.elements.selectProvincia, 'click');
      performActionOnElement(this.elements.optionProvincia, 'click');
    }
  
    clickLocalidad() {
      performActionOnElement(this.elements.selectLocalidad, 'click');
      performActionOnElement(this.elements.optionLocalidad, 'click');
    }
  
    typeCalle(street) {
      performActionOnElement(this.elements.inputCalle, 'type', street);
    }
  
    typeAltura(streetHeight) {
      performActionOnElement(this.elements.inputAltura, 'type', streetHeight);
    }
  
    typePostalCode(postalCode) {
      performActionOnElement(this.elements.inputCodigoPostal, 'type', postalCode);
    }
  
    clickActividadEconomica() {
      performActionOnElement(this.elements.selectActividadEco, 'click');
      performActionOnElement(this.elements.optionActividadEco, 'click');
    }  

    clickActividadEconomica() {
      performActionOnElement(this.elements.selectActividadEco, 'click');
      performActionOnElement(this.elements.optionActividadEco, 'click');
    }
  
    clickNoEsPep() {
      this.elements.noEsPepBtn().click();
    }
  
    clickNoEsFacta() {
      this.elements.noEsFactaBtn().click();
    }
  
    clickNoEsSoi() {
      this.elements.noEsSoiBtn().click();
    }
  
    clickNoEsCargoPublico() {
      this.elements.noCargoPublicoBtn().click();
    }
  
    clickContinuarBtn() {
      this.elements.continuarBtn().click();
    }
     
  }
  
  export const ownersPage = new OwnersPage();
  