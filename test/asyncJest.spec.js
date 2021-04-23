const assert = require('assert');
const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", () => {
  test("atende", async () => {
    const expect1 = await answerPhone(true);
    await expect(expect1).toBe('Oi!');
    return expect1;
  });
  test("ocupado", async () => {
    const expect1 = await answerPhone(false).catch((err) => 'Infelizmente não podemos atender...');
    await expect(expect1).toBe('Infelizmente não podemos atender...');
    return expect1;
  });
});
