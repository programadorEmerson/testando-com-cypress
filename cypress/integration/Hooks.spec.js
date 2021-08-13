/// <references type="cypress">

describe('Utilizando Hooks', () => {
  before(() => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html');
  });
  beforeEach(() => {
    cy.reload();
  })

  it('Teste 1', () => {
    // Executa o before e o reload
   }) 

  it('Teste 2', () => {
    // Executa só o reload
   }) 
});

