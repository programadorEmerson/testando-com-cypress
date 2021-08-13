/// <references type="cypress">

const baseUrl = 'https://www.wcaquino.me/cypress/componentes.html';
describe('Cypress interagindo com elementos', () => {
  it('Localizando e Clicando em um botão', () => {
    cy.visit(baseUrl);
    const botaoTeste = cy.get('#buttonSimple');
      botaoTeste
        .should('have.value', 'Clique Me!')
        .click()
        .should('have.value', 'Obrigado!');
  }) 
});

