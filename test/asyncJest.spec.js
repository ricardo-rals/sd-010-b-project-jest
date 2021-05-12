const answerPhone = require('../src/asyncJest');
// const assert = require('assert');

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    expect.assertions(1);
    await expect(answerPhone(true)).resolves.toBe('Oi!');
  });

  test('ocupado', async () => {
    expect.assertions(1);
    return expect(answerPhone(false))
      .rejects.toStrictEqual(Error('Infelizmente não podemos atender...'));
  });
});
