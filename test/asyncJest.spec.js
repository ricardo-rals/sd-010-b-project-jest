const answerPhone = require('../src/asyncJest');

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

/*
Esse código eu usei também na results da turma sete
*/

describe('o retorno do telefonema', () => {
  test('atende', async (done) => {
    const response = await answerPhone(true);
    expect(response).toEqual('Oi!');
    done();
  });
  test('ocupado', async () => {
    await expect(answerPhone(false)).rejects.toEqual(Error('Infelizmente não podemos atender...'));
  });
});
