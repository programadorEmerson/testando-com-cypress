/// <references type="cypress">

describe('Interagindo com campos de texto', () => {
  before(() => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html');
  });
  beforeEach(() => {
    cy.reload();
  })

  it('Input textoNome', () => {
    const inputNome = cy.get('#formNome');

    inputNome.type('Cypress Test');
    inputNome.should('have.value', 'Cypress Test');
   });

   it('Input textSobrenome', () => {
    const inputTextArea = cy.get('#formNome');

    inputTextArea.type('Cypress Test')
      .should('have.value', 'Cypress Test');
   });

  it('Input textArea', () => {
    const inputTextArea = cy.get('#elementosForm\\:sugestoes');

    inputTextArea.type('Cypress Test')
      .should('have.value', 'Cypress Test')
      .clear()
      .type('Texto 2')
      .should('have.value', 'Texto 2')
      .clear()
      .should('have.value', '')
    });
});

