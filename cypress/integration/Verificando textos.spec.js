/// <references type="cypress">

const baseUrl = 'https://www.wcaquino.me/cypress/componentes.html';

describe('Verificando textos', () => {
  it('Verificando se existe texto', () => {
    cy.visit(baseUrl);
    cy.get('body').should('contain', 'Cuidado');
    cy.get('span').should('contain', 'Cuidado');
    cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...');
  }); 
});

