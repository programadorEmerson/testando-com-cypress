/// <references type="cypress">

const baseUrl = 'https://www.wcaquino.me/cypress/componentes.html';

describe('Cypress acessando paginas', () => {
  it('Visitar uma página', () => {
    cy.visit(baseUrl);
  })
  it('Verificar título da página com should', () => {
    cy.visit(baseUrl);
    cy.title()
      .should('be.equal', 'Campo de Treinamento')
      .and('contains', 'Campo')
  }); 
});

