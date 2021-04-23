let answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", () => {
  answerPhone = jest.spyOn( { answerPhone }, 'answerPhone');

  afterEach(() => answerPhone.mockRestore());
  
  test("atende", () => {
    answerPhone();
    expect(answerPhone).toHaveBeenCalled();
    expect(answerPhone).toHaveBeenCalledTimes(1);
    expect(answerPhone()).resolves.toBe('Oi!');
  });

  test("ocupado", () => {
    answerPhone.mockRejectedValue('Infelizmente não podemos atender...')

    answerPhone();
    expect(answerPhone).toHaveBeenCalled();
    expect(answerPhone).toHaveBeenCalledTimes(1);
    expect(answerPhone()).rejects.toBe('Infelizmente não podemos atender...');    
  });
});
