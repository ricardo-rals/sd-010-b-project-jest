// const assert = require('assert');
const answerPhone = require('../src/asyncJest');// essa tá no arquivo src.
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende', async () => { // o req pede pra ser assincrona, aí usa o await também.
    const atendeu = await answerPhone(true);
    expect(atendeu.toBe('Oi!'));
  });
  // A parte abaixo da função com o parâmetro False, eu apenas entendi a solução com o PR  do colega Matheus Bodra. Link do PR dele: https://github.com/tryber/sd-010-b-project-jest/blob/6d0a58f8590dc4c1a3cf8caaf04033c833d852d3/test/asyncJest.spec.js
  test('ocupado', async () => {
    const naoAtende = await answerPhone(false).catch((error) => error); // tem que usar o catch aqui.
    expect(naoAtende).toEqual(Error('Infelizmente não podemos atender...')); // atenção ao código no SRC.
  });
});
