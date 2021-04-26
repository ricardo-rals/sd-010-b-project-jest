const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

// Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/
// auxílio do malbathan e fabio marturano roger franco;

describe('o retorno do telefonema', () => {
  test('atende', () => {
    expect.assertions(1);
    return expect(answerPhone(true)).resolves.toBe('Oi!');
    // Insira seu teste assíncrono aqui
  });
  test('ocupado', async () => {
    expect.assertions(1);
    try {
      await answerPhone(false);
    } catch (err) {
      expect(err).toEqual(Error('Infelizmente não podemos atender...'));
    }
  });
  it('testando se existe ou nao o ID', async () => {
    await expect(answerPhone()).rejects.toEqual(Error('Infelizmente não podemos atender...'));
  });
});
