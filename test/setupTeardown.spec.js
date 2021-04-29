const adventure = require('../src/setupTeardown');
/*
Num universo não tão distante, um grupo de aventureiros da Trybe enfrentam uma série de testes.
O grupo parte em direção ao sucesso, mas,
devido a ameaça de criaturas temíveis, o grupo não chegará inteiro ao fim.
Após cada aventura um de nossos aventureiros cairá.
Cada um dos testes abaixo verifica a quantidade de aventureiros após cada iteração.
Sua missão aqui é:

  - Use a função randomAttack do objeto adventure
  que remove um dos aventureiros toda vez que é chamada,
  ela deve funcionar entre cada teste.
  Opcional:
  - Para ficar mais visível, imprima na tela após cada teste o grupo de aventureiros restante.
  - No fim dos testes, imprima uma mensagem com o nome do aventureiro que sobreviveu.

PS: Os codinomes dos aventureiros são reais! Tentem descobrir quem é quem!

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('quem sobreviveu?', () => {
  /*
    Esta função recebe uma lista de objetos specialist e retorna lista contendo os apenas nomes dos especialistas

    Material consultado sobre a function join
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
   */
  const specialistNamesList = (specialists) =>
    specialists.map(
      (specialist) => `${specialist.nome}`,
    ).join(', ');

  /*
    Material consultado sobre setup-teardown
    https://archive.jestjs.io/docs/en/24.x/setup-teardown
   */
  beforeAll(() => console.log(
    `Grupo de aventureiros inicial: ${
      specialistNamesList(adventure.specialists)}`,
  ));

  beforeEach(() => {
    adventure.randomAttack();
    console.log(`Grupo de aventureiros restantes: ${
      specialistNamesList(adventure.specialists)}`);
  });

  afterAll(() => console.log(`Sobrevivente: ${
    specialistNamesList(adventure.specialists)}`));

  test('depois da primeira aventura', () => {
    expect(adventure.specialists.length).toBe(5);
  });
  test('depois da segunda aventura', () => {
    expect(adventure.specialists.length).toBe(4);
  });
  test('depois da terceira aventura', () => {
    expect(adventure.specialists.length).toBe(3);
  });
  test('depois da quarta aventura', () => {
    expect(adventure.specialists.length).toBe(2);
  });
  test('depois da quinta aventura', () => {
    expect(adventure.specialists.length).toBe(1);
  });
});
