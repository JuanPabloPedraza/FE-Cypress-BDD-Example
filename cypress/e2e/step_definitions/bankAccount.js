import {
    Given,
    When,
    Then
  } from "@badeball/cypress-cucumber-preprocessor";

  import {bankAccountPage} from '@pages/BankAccountPage'
  const testData = require('../../data/users.json');
  let userData = testData.data1
  
  When("I click on bank national", () => {
    bankAccountPage.clickBancoNacionalBtn();
  });

  When("I complete the section bank national", () => {
    let cbu = userData.CBU
    bankAccountPage.typeInputCbuBtn(cbu);
    bankAccountPage.clickAtentionConfirmBtn();
    bankAccountPage.clickSelectBankBtn();
    bankAccountPage.clickOptionBank();
    bankAccountPage.clickSelectTypeAccountBtn();
    bankAccountPage.clickOptionTypeAccountBtn();
    bankAccountPage.clickSelectCurrency();
    bankAccountPage.clickOptionCurrency();
    bankAccountPage.clickContinuarBtn();
  });