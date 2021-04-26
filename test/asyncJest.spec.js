const answerPhone = require('../src/asyncJest');
// console.log(answerPhone('true'));
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende', () => {
    const result1 = answerPhone(true);
    expect(answerPhone(true)).toEqual(result1);
    expect(answerPhone('true')).toEqual(result1);
  });
  test('ocupado', () => {
    const result2 = answerPhone(false);
    expect(answerPhone(false)).toEqual(result2);
    expect(answerPhone(12)).toEqual(result2);
    expect(answerPhone('false')).toEqual(result2);
    expect(answerPhone('teste se receber string')).toEqual(result2);
  });
});
