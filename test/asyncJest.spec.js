const answerPhone = require('../src/asyncJest');

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    await expect(answerPhone(true)).resolves.toBe('Oi!');
  });
  test('ocupado', async () => {
    await expect(answerPhone(false)).rejects
      .toEqual(new Error('Infelizmente não podemos atender...'));
  });
});
