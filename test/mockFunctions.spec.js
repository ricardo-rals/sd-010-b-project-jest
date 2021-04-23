const mockFunctions = require('../src/mockFunctions');

/*
Criamos uma série de funções com eficiência duvidosa.
Elas estão no arquivo 'src/mockFunctions.js'.
Crie mock functions para cada uma das operações de modo que os cálculos sejam feitos corretamente,
não como estão sendo feitos no arquivo original.
A idéia é que os novos testes sobrescrevam os testes
importados apenas na suite de testes abaixo.

Importante! A correção de código via mock functions não é uma aplicação usual.
O foco aqui é a utilização de mock functions.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('verifica as funções e os mocks', () => {
  // Crie suas mock functions aqui

  test('testa função add', () => {
    const muquiandoAdd = jest.spyOn(mockFunctions, 'add').mockImplementation((a, b) => a + b);
    expect(muquiandoAdd(1, 2)).toEqual(3);
    expect(muquiandoAdd(8, 37)).toEqual(45);
    expect(muquiandoAdd(-11, 25)).toEqual(14);
    expect(muquiandoAdd(13, -188)).toEqual(-175);
    expect(muquiandoAdd(7, 26)).toEqual(33);
  });
  test('testa função subtract', () => {
    const muquiandoSub = jest.spyOn(mockFunctions, 'subtract').mockImplementation((a, b) => a - b);
    expect(muquiandoSub(899, 35)).toEqual(864);
    expect(muquiandoSub(-17, 333)).toEqual(-350);
    expect(muquiandoSub(45, 97)).toEqual(-52);
    expect(muquiandoSub(23, -108)).toEqual(131);
    expect(muquiandoSub(-133, -29)).toEqual(-104);
  });
  test('testa função multiply', () => {
    const muquiandoMul = jest.spyOn(mockFunctions, 'multiply').mockImplementation((a, b) => a * b);
    expect(muquiandoMul(1, 2)).toEqual(2);
    expect(muquiandoMul(0, 5)).toEqual(0);
    expect(muquiandoMul(-4, 9)).toEqual(-36);
    expect(muquiandoMul(-12, -7)).toEqual(84);
    expect(muquiandoMul(19, 23)).toEqual(437);
  });
  test('testa função divide', () => {
    const muquiandoDiv = jest.spyOn(mockFunctions, 'divide').mockImplementation((a,b) => a / b);
    expect(muquiandoDiv(169, 13)).toEqual(13);
    expect(muquiandoDiv(-1900, 5)).toEqual(-380);
    expect(muquiandoDiv(42, 7)).toEqual(6);
    expect(muquiandoDiv(729, 243)).toEqual(3);
    expect(muquiandoDiv(1331, 11)).toEqual(121);
  });
  test('testa função power', () => {
    const muquiandoPow = jest.spyOn(mockFunctions, 'power').mockImplementation((a,b) => a ** b);
    expect(muquiandoPow(10, 2)).toEqual(100);
    expect(muquiandoPow(2, 10)).toEqual(1024);
    expect(muquiandoPow(5, 5)).toEqual(3125);
    expect(muquiandoPow(1, 10)).toEqual(1);
    expect(muquiandoPow(0, 0)).toEqual(1);
  });
  test('testa função factorial', () => {
    const muquiandoFac = jest.spyOn(mockFunctions, 'factorial').mockImplementation((a) => {
      let fact = a;
      for (let i = 1; i < a; i += 1) {
        fact *= i;
      }
      return fact;
    });
    expect(muquiandoFac(5)).toEqual(120);
    expect(muquiandoFac(10)).toEqual(3628800);
    expect(muquiandoFac(3)).toEqual(6);
    expect(muquiandoFac(8)).toEqual(40320);
    expect(muquiandoFac(2)).toEqual(2);
  });
});
