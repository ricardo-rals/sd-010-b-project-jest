// const assert = require('assert');
const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
D.Serafim iniciando o projeto-jest
*/

// revisei o assunto do dia para buscar ajuda:
// https://app.betrybe.com/course/fundamentals/testes-automatizados-com-jest/primeiros-passos-no-jest/28999aac-68b5-4aca-8c58-f9356ad8a00f/conteudos/e7d63c82-6e88-45fa-87fa-478f85168f58/um-pouco-de-mao-na-massa/70e31b94-f7fb-47ea-bb0e-9cd89e42e022?use_case=next_button

describe('o retorno do telefonema', () => {
  test('atende', () => {
    // assert.fail();
    // Insira seu teste assíncrono aqui
    expect(answerPhone(true)).resolves.toEqual('Oi!');
  });
  test('ocupado', () => {
    // assert.fail();
    // Insira seu teste assíncrono aqui
    expect(answerPhone(false)).rejects.toEqual('Infelizmente não podemos atender...');
  });
});
