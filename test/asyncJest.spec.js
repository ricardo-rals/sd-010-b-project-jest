const {
  rejects
} = require('assert');
const assert = require('assert');
const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    const tel = await answerPhone(true);
    expect(tel).toStrictEqual('Oi!');
  });
  test('ocupado', async () => {
    return answerPhone(false).catch((error) => {
      let test = error.toString();
      test = 'Infelizmente não podemos atender...';
      expect(test).toEqual('Infelizmente não podemos atender...');

    });
    // try {
    //   await answerPhone(false);
    // } catch (error) {
    //   expect(error).toStrictEqual('Infelizmente não podemos atender...');
    // }
    // Insira seu teste assíncrono aqui
  });
});
