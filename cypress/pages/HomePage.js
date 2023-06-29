import { performActionOnElement } from '../support/commonActions.js';

class HomePage {
    elements = {
      humanaBtn: () => cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[4]/button[1]')
    };


    clickHumana() {
      performActionOnElement(this.elements.humanaBtn, 'click');
    }
  
  }
  
  export const homePage = new HomePage();
  