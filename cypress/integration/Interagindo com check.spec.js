/// <references type="cypress">

describe('Interagindo com check box', () => {
  before(() => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html');
  });
  beforeEach(() => {
    cy.reload();
  })

  it('Selecionando 1 checkbox', () => {
    const checkBox = cy.get('#formComidaCarne');
    checkBox.click()
      .should('be.checked'); // Está checado
   });

   it('Selecionando todos os checkbox', () => {
    const checkBoxTodas = cy.get('[name=formComidaFavorita]');
    const checkBox = cy.get('#formComidaFrango');
    checkBoxTodas.click({multiple: true})
    .should('be.checked'); // Estão todos checados
    checkBox.should('be.checked'); // Está checado
   });  
});

