const answerPhone = require('../src/asyncJest');

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    expect.assertions(1);
    await expect(answerPhone(true)).resolves.toBe('Oi!');
  });

  test('ocupado', async () => {
    await expect(answerPhone(false)).rejects.toEqual('Infelizmente não podemos atender...');
  });
});
