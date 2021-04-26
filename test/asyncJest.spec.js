const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/
/*
  Material consultado sobre utilizar async/await em testes do Jest
  https://jestjs.io/pt-BR/docs/asynchronous

  Material consultado sobre uso de .resolves para decodificar o motivo de uma promessa cumprida
  https://jestjs.io/pt-BR/docs/expect#resolves

  Material consultado sobre uso de .toBe para testar tipos primitivos
  https://jestjs.io/pt-BR/docs/expect#tobevalue

  Material consultado sobre como testar lançamento de exceções (error) no Jest
  https://jestjs.io/pt-BR/docs/using-matchers#exce%C3%A7%C3%B5es

  Material consultado sobre uso de .rejects para decodificar o motivo de uma promessa rejeitada
  https://jestjs.io/pt-BR/docs/expect#rejects
*/
describe('o retorno do telefonema', () => {
  test('atende', async () => { // testa o retorno do telefonema quando é atendido
    expect.assertions(1); // contém o número de assertions esperados

    // solução com .resolves
    await expect(answerPhone(true)) // espera que answerPhone retorne um objeto promise
      .resolves // que foi cumprida
      .toBe('Oi!'); // possuindo a mensagem esperada

    /* // solução sem informar que a promise foi cumprida
    const response = await answerPhone(true); // armazena em response o retorno de answerPhone ao receber true
    expect(response).toBe('Oi!'); // verifica se response é o retorno esperado */
  });
  test('ocupado', async () => { // testa o retorno do telefonema quando é ocupado
    expect.assertions(1); // contém o número de assertions esperados

    // solucão com .rejects.toThrow
    await expect(answerPhone(false)) // espera que answerPhone retorne um objeto promise
      .rejects // que foi rejeitado
      .toThrow('Infelizmente não podemos atender...'); // possuindo uma exceção com a mensagem de erro esperada

    /* try { // solução com try/catch
      await answerPhone(false); // espera que answerPhone retorne um objeto promise que foi rejeitado
    } catch (error) { // possuindo uma exceção
      expect(error.message).toMatch('Infelizmente não podemos atender...'); // com a mensagem de erro esperada
    } */
  });
});
