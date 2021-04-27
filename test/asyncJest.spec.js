/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/
// const assert = require('assert');
const answerPhone = require('../src/asyncJest');
// Insira seu teste assíncrono aqui
// questao 01
describe('o retorno do telefonema', () => {
  test('atende', async () => {
    expect.assertions(1);
    const resp = await answerPhone(true);
    expect(resp).toStrictEqual('Oi!');
    // Insira seu teste assíncrono aqui
  });
  test('ocupado', async () => {
    expect.assertions(1);
    return answerPhone().catch((error) => {
      expect(error.message).toStrictEqual('Infelizmente não podemos atender...');
    });
  });
});
