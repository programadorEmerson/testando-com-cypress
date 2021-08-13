/// <references type="cypress">

describe('Interagindo com Combo Box Múltiplos', () => {
  before(() => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html');
  });
  beforeEach(() => {
    cy.reload();
  })

  it('Selecionando vários itens', () => {
    const listBox = cy.get('[data-testid=dataEsportes]');
    listBox.select([
      'natacao', 'Corrida' // Para combos multiplos inviar o value
    ]);
      //TODO validar compos multiplos 
   });   
});

