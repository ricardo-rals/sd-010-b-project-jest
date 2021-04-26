/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

const answerPhone = require('../src/asyncJest');

// questao 01
describe('o retorno do telefonema', () => {
  test('atende', async () => answerPhone(true).then((resp) => {
    expect.asserttions(1);
    expect(resp).toEqual('oi!');
    // Insira seu teste assíncrono aqui
  }));
  test('ocupado', async () => answerPhone(false).catch((error) => {
    expect.asserttions(1);
    expect(error).toEqual(new Error('infelizmente não podemos atender...'));
  }));
  // Insira seu teste assíncrono aqui
});
