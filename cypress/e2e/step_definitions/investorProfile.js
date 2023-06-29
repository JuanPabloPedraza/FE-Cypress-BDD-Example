import {
    Given,
    When,
    Then
  } from "@badeball/cypress-cucumber-preprocessor";

  import {investorProfilePage} from '@pages/InvestorProfilePage'
  
  When("I complete the section investor profile", () => {
    investorProfilePage.clickExpEnInversionesBtn();
    investorProfilePage.clickConocimientoMercadoBtn();
    investorProfilePage.clickOperoEnBolsaBtn();
    investorProfilePage.clickOperoAccionesBtn();
    investorProfilePage.clickContinuarBtn();
    investorProfilePage.clickConfirmarBtn();
  });

  