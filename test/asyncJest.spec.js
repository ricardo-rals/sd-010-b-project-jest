const answerPhone = require('../src/asyncJest');

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    expect.assertions(1);
    const answer = await answerPhone(true);
    await expect(answerPhone(true)).resolves.toBe('Oi!');
  });

  test('ocupado', async() => {
    const answer = await answerPhone(false);
    expect.assertions(1);
    await expect(answerPhone(false)).rejects.toEqual('Infelizmente não podemos atender...');
  });
});
