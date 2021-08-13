/// <references type="cypress">

describe('Interagindo com list box', () => {
  before(() => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html');
  });
  beforeEach(() => {
    cy.reload();
  })

  it('Selecionando 1 item ListBox', () => {
    const listBox = cy.get('[data-test=dataEscolaridade]');
    listBox.select('2o grau completo') // Verificando pelo value
      .should('have.value', '2graucomp'); // A verificação é feita pelo option

    listBox.select('1graucomp') // verificando pelo option
      .should('have.value', '1graucomp'); // A verificação é feita pelo option
   });
   
});

