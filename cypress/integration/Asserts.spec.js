/// <references type="cypress">

describe('Utilizando Asserts', () => {
  it('Testes de igualdade', () => {
    const a = 1;
    expect(a, 'Deveria ser um').to.be.equal(1);
    expect(a, 'Não deveria ser dois').not.to.be.equal(2);
  })
  it('Testes de booleanos', () => {
    const a = true;
    expect(a, 'Deveria ser true').to.be.true;
    expect(a, 'Deveria ser true').not.to.be.false;
  })
  it('Testes de nulos', () => {
    const a = '';
    const b = null;
    let c;
    expect(a, 'Não Deveria ser null').not.to.be.null;
    expect(b, 'Deveria ser null').to.be.null;
    expect(c, 'Deveria ser undefined').to.be.undefined;
  })
});

describe('Utilizando Asserts com objetos', () => {
  it('Testes de objetos', () => {
    const obj = {a: 1, b: 2};
    const obj1 = {};
    expect(obj, 'Deveria ser objeto').to.be.deep.equal({a: 1, b: 2}); // se são exatamente iguais
    expect(obj, 'Deveria ser objeto {a: 1, b: 2}').eql({a: 1, b: 2}); // Se são exatamente iguais
    expect(obj, 'Deveria incluir o atributo {b: 2}').include({b: 2}); // Se inclui um valor no objeto
    expect(obj, 'Deveria ter a chave b').to.have.property('b'); // Se inclui a chave b no objeto
    expect(obj, 'Deveria ter a chave b com valor 2').to.have.property('b', 2); // Se inclui a chave b no objeto com o valor 2
    expect(obj, 'Deveria ter conteúdo').to.not.be.empty; // Se o objeto não esta vazio
    expect(obj1, 'Deveria ser vazio').to.be.empty; // Se o objeto não esta vazio
  })
});

describe('Utilizando Asserts com arrays', () => {
  it('Testes de arrays', () => {
    const array = [1,2,3];
    const array1 = [];
    expect(array, 'Deve possuir 1,2,3').to.have.members([1,2,3]); // se existe o 1, 2 e 3 
    expect(array, 'Deve possuir 1 e 3').to.include.members([1,3]); // se existe o 1, e 3 
    expect(array, 'Não deve estar vazio').to.not.be.empty; // não pode ser vazio
    expect(array1, 'Deve estar vazio').to.be.empty; // deve estar vazio
  })
});

describe('Verificando tipos', () => {
  it('Testes de tipos', () => {
    const numero = 1;
    const string = '1';
    const objeto = {};
    const array = [];
    expect(numero, 'Deve ser numero').to.be.a('number'); // se é numero 
    expect(string, 'Deve ser numero').to.be.a('string'); // se é string
    expect(objeto, 'Deve ser numero').to.be.a('object'); // se é objeto
    expect(array, 'Deve ser numero').to.be.a('array'); // se é array
  })
});

describe('Trabalhando com strings', () => {
  it('Testando igualdade', () => {
    const string = 'Testando string';
    const string1 = 'Texto';
    const string2 = '1 texto';
    expect(string, 'Testando igualdade').to.be.equal('Testando string'); // Testando igualdade
    expect(string, 'Testando se tem 15 caracteres').to.have.length(15); // Testando tamanho
    expect(string, 'Testando se conteo o texto string').to.contains('string'); // Testando conteúdo
    expect(string, 'Testando contem parte do texto com regex').to.match(/stri/); // Testando conteúdo com regex case sensitive
    expect(string, 'Testando contem parte do texto com regex').to.match(/Stri/i); // Testando conteúdo com regex sem case sensitive
    expect(string, 'Testando se começa com texto testando').to.match(/^testando/i); // Testando conteúdo com regex sem case sensitive se inicia
    expect(string, 'Testando se termina com texto string').to.match(/string$/i); // Testando conteúdo com regex sem case sensitive se inicia
    expect(string1, 'Testando contem só texto').to.match(/\D+/); // Testando se não contém números
    expect(string2, 'Testando contem só texto').to.match(/\W+/); // Testando se não contém números
  })
});

describe('Trabalhando com numeros', () => {
  it('Testes', () => {
    const numero1 = 4;
    const numero2 = 4.564646;
    expect(numero1, 'Verifica se é igual').to.be.equal(4);
    expect(numero1, 'Verifica maior que 3').to.be.above(3);
    expect(numero1, 'Verifica menor que 5').to.be.below(5);
    expect(numero2, 'Verifica se é próximo de 4.5 com precisão de 0.1').to.be.closeTo(4.5, 0.1);
    expect(numero2, 'Verifica se é próximo de 4.5 com precisão de 0.1').to.be.above(4.5, 0.1);
  })
});
