// const assert = require('assert');
const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/
console.log('hello world!')

describe('o retorno do telefonema', () => {
  test('atende', () => {
    expect.assertions(1);
    return answerPhone(true).then((response) => {
      expect(response).toStrictEqual('Oi!');
    });
  });
  test('ocupado', () => {
    expect.asassertions(1);
    return answerPhone().then((response) => {
      expect(response).toBe(Error('Infelizmente não podemos atender...'));
    });
  });
});

// Com a ajuda dos colegas Gabriel , Alessandra e outros, discutimos a respeito do return,
// Na segunda operação de Error, usando o Try Catch, onde ele não necessita de um return,
// Ja que ele ja funciona Assincronamente.
