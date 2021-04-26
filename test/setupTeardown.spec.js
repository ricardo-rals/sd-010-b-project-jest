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

// revisei o assunto do dia para buscar ajuda:
// https://app.betrybe.com/course/fundamentals/testes-automatizados-com-jest/jest-testes-assincronos/7cf613f2-d8ba-40b5-8f9d-2619d813a106/conteudos/24761f0f-7fe2-4fdc-9a53-de43167217ce/setup-e-teardown/aca38457-711a-4de9-b1a7-ddba4219e73d?use_case=next_button

describe('quem sobreviveu?', () => {
  // Adicione seu código aqui
  beforeEach(() => {
    adventure.randomAttack();
  });

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
