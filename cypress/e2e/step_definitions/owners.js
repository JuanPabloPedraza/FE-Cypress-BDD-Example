import {
    Given,
    When,
    Then
  } from "@badeball/cypress-cucumber-preprocessor";

  import {ownersPage} from '@pages/OwnersPage'
  const testData = require('../../data/users.json');
  let userData = testData.data1
  

  When("I select my document type as DNI", () => {
    ownersPage.clickSelectDNI();
    ownersPage.clickFirstOptionDNI();
  });

  When("I enter my number of dni and cuil", () => {
    const DNI = userData.DNI;
    const cuil = userData.CUIL;
    ownersPage.typeInputDNI(DNI);
    ownersPage.typeInputCUIL(cuil);
  });

  When("I enter my first name and lastname", () => {
    const firstName = userData.FirstName;
    const lastName = userData.LastName;
    ownersPage.typeInputFirstName(firstName);
    ownersPage.typeInputLastName(lastName);
  });

  When('I select the nationality and gender', () => {
    ownersPage.clickNationality();
    ownersPage.clickGenero();
  });
  
  When('I select the civil state', () => {
    ownersPage.clickEstadoCivil();
  });

  When('I complete the section contact information', () => {
    const email = userData.Email;
    const phone = userData.Phone;
    ownersPage.typeEmail(email);
    ownersPage.typePhone(phone);
  });

  When('I complete the section legal domicilie', () => {
    const street = userData.Street
    const streetHeight = userData.StreetHeight
    const postalCode = userData.PostalCode
    ownersPage.clickPaisLegal();
    ownersPage.clickProvincia();
    ownersPage.clickLocalidad();
    ownersPage.typeCalle(street);
    ownersPage.typeAltura(streetHeight)
    ownersPage.typePostalCode(postalCode);
  });

  When('I select economic activity', () => {
    ownersPage.clickActividadEconomica();
  });

  When('I complete the section declaracion jurada', () => {
    ownersPage.clickNoEsPep();
    ownersPage.clickNoEsFacta();
    ownersPage.clickNoEsSoi();
    ownersPage.clickNoEsCargoPublico();
  });

  When('I select the Continuar button', () => {
    ownersPage.clickContinuarBtn();
  });