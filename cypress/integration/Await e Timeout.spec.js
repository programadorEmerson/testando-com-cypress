/// <references type="cypress">

describe('Realizando testes Await e Timeout', () => {
  before(() => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html');
  });
  beforeEach(() => {
    cy.reload();
  })

  it('Alterando timeout', () => { 
    // Altera o padrão no cypress.json
    // "defaultCommandTimeout": 1000
    const itemComDelay = cy.get('#buttonDelay');
    itemComDelay.click();
    // cy.wait(5000);
    cy.get('#novoCampo', {
      timeout: 4000 // Se a condição atender antes o fluxo é liberado
    }).should('exist');
   });
  it('Then vs Should', () => { 
    const itemComDelay = cy.get('#buttonListDOM');
    itemComDelay.click();
    cy.get('#lista li span').then((item) => {
      // then para elementos to.have traz quando encontrar
      // should para elementos ('to.have') Fica tentando
      console.log(item);
    })
   });   
});

