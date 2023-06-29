export function performActionOnElement(element, action, value) {
    const el = element().should('exist').should('be.visible');
  
    if (action === 'click') {
      el.click();
    } else if (action === 'type' && value) {
      el.type(value);
    } else {
      throw new Error(`Unsupported action: ${action}`);
    }
  }
  