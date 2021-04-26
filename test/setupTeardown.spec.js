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
  test('depois da primeira aventura', (done) => {
    adventure.specialists.splice(adventure.randomSpecialist, 1);
    expect(adventure.specialists.length).toBe(5);
    done();
  });

  test('depois da segunda aventura', (done) => {
    adventure.specialists.splice(adventure.randomSpecialist, 1);
    expect(adventure.specialists.length).toBe(4);
    done();
  });

  test('depois da terceira aventura', (done) => {
    adventure.specialists.splice(adventure.randomSpecialist, 1);
    expect(adventure.specialists.length).toBe(3);
    done();
  });

  test('depois da quarta aventura', (done) => {
    adventure.specialists.splice(adventure.randomSpecialist, 1);
    expect(adventure.specialists.length).toBe(2);
    done();
  });

  test('depois da quinta aventura', (done) => {
    adventure.specialists.splice(adventure.randomSpecialist, 1);
    expect(adventure.specialists.length).toBe(1);
    done();
  });
// Diegho e pessoal do Discord me deram uma dica para colocar adventure.specialists antes do expect.
// source: https://www.youtube.com/watch?v=Eu1O9e4a2nY
});
