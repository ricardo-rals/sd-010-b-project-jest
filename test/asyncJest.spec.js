const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
Mariana
*/

describe('o retorno do telefonema', () => {
  test('atende', () => {
    expect.assertions(1);
    return answerPhone(true).then((res) => expect(res).toBe('Oi!'));
  });
  test('ocupado', () => {
    // Resolvido com ajuda da Arlen
    expect.assertions(1);
    return answerPhone(false).catch((res) => {
      expect(res).toBe('Infelizmente não podemos atender...');
    });
  });
});
