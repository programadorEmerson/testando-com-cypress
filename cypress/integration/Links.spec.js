/// <references type="cypress">

const baseUrl = 'https://www.wcaquino.me/cypress/componentes.html';

describe('Acessando links', () => {
  it('Links', () => {
    cy.visit(baseUrl);
    cy.get('[href="#"]').click();
    cy.get('#resultado').should('have.text', 'Voltou!');
    
    cy.reload();
    cy.get('#resultado').should('have.text', 'Status: Nao cadastrado');    
  }) 
});

