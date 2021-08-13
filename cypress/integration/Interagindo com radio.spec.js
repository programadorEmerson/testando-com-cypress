/// <references type="cypress">

describe('Interagindo com radio buttons', () => {
  before(() => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html');
  });
  beforeEach(() => {
    cy.reload();
  })

  it('Radio Feminino', () => {
    const radioButton = cy.get('#formSexoFem');
    const radioButton2 = cy.get('#formSexoMasc');

    radioButton.should('not.be.checked'); // Não está checado
    radioButton2.should('not.be.checked'); // Não está checado
    
    radioButton.click()
      .should('be.checked'); // Está checado
   });

   it('Radio Masculino', () => {
    const radioButton = cy.get('#formSexoFem');
    const radioButton2 = cy.get('#formSexoMasc');

    radioButton.should('not.be.checked'); // Não está checado
    radioButton2.should('not.be.checked'); // Não está checado

    radioButton2.click()
      .should('be.checked'); // Está checado
   });

   it('Quantidade de Radios', () => {
    const radios = cy.get('[name="formSexo"]');
    radios.should('have.length', 2); // Verifica se tem 2
   });
});

