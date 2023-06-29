import {
    Given,
    When,
    Then
  } from "@badeball/cypress-cucumber-preprocessor";

  import {homePage} from '@pages/HomePage'
  import {humanPage} from '@pages/HumanPage'

  Given("A web browser is at the celeri home page", () => {
    cy.visit("/");
  });

  When("I select the type of account Humana", () => {
    homePage.clickHumana();
  });

  When("I click on the Agregar button in the Titulares section", () => {
    humanPage.clickAgregarTitularesBtn();
  });

  When("I click on the Agregar button in the cuentas bancarias section", () => {
    humanPage.clickAgregarCuentaBancariaBtn();
  });

  When("I click on the Agregar button in the perfil inversor section", () => {
    humanPage.clickAgregarPerfilInversorBtn();
  });

  When("I accept terms and policies", () => {
    humanPage.clickAceptarTerminosBtn();
    humanPage.clickAceptarPoliticaBtn();
  });
  