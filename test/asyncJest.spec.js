// const assert = require('assert');
const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende', () => {
    // Source: https://app.betrybe.com/course/fundamentals/testes-automatizados-com-jest/jest-testes-assincronos/7cf613f2-d8ba-40b5-8f9d-2619d813a106/conteudos/24761f0f-7fe2-4fdc-9a53-de43167217ce/testando-codigos-assincronos/9023bf96-c786-40f2-8056-bbee1923b52e?use_case=side_bar
    expect.assertions(1);
    return answerPhone(true).then((resolve) => {
      expect(resolve).toBe('Oi!');
    });
  });
  test('ocupado', () => {
    // Source: https://app.betrybe.com/course/fundamentals/testes-automatizados-com-jest/jest-testes-assincronos/7cf613f2-d8ba-40b5-8f9d-2619d813a106/conteudos/24761f0f-7fe2-4fdc-9a53-de43167217ce/testando-codigos-assincronos/9023bf96-c786-40f2-8056-bbee1923b52e?use_case=side_bar
    expect.assertions(1);
    return answerPhone(false).catch((reject) => {
      expect(reject).toEqual(Error('Infelizmente não podemos atender...'));
    });
  });
});
