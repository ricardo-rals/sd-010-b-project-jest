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
    // Source: https://app.betrybe.com/course/fundamentals/testes-automatizados-com-jest/jest-testes-assincronos/7cf613f2-d8ba-40b5-8f9d-2619d813a106/conteudos/24761f0f-7fe2-4fdc-9a53-de43167217ce/matcher-resolves-rejects/a2075773-401d-48f1-bb53-4f617ef63c79?use_case=next_button
    expect.assertions(1);
    return expect(answerPhone(true)).resolves.toBe('Oi!');
  });
  test('ocupado', () => {
    // Source: https://app.betrybe.com/course/fundamentals/testes-automatizados-com-jest/jest-testes-assincronos/7cf613f2-d8ba-40b5-8f9d-2619d813a106/conteudos/24761f0f-7fe2-4fdc-9a53-de43167217ce/matcher-resolves-rejects/a2075773-401d-48f1-bb53-4f617ef63c79?use_case=next_button
    expect.assertions(1);
    return expect(answerPhone(false)).rejects.toEqual(Error('Infelizmente não podemos atender...'));
  });
});
