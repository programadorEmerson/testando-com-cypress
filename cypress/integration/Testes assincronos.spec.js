/// <references type="cypress">

describe('Realizando testes assincronos', () => {
  before(() => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html');
  });
  beforeEach(() => {
    cy.reload();
  })

  it('Aguardando o elemento carregar', () => {
    const itemComDelay = cy.get('#buttonDelay');
    itemComDelay.click();

    // Campo não deve exisitr até terminar o carregamento
    cy.get('#novoCampo').should('not.exist');
    
    // Campo existe após o carregamento
    cy.get('#novoCampo').should('exist');

   });

  it('Aguardando o elemento carregar 2', () => {
    const itemComDelay = cy.get('#buttonList');
    itemComDelay.click();

    // Verifica se existe o span apos delay
    cy.get('#lista li')
      .find('span')
      .should('contain', 'Item 1');

    // Se for encadeado, utilize o should

    // Verifica se existe o span 2 apos delay
    cy.get('#lista li span')
      .should('contain', 'Item 2');

   });
   
});

