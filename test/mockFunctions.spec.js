const mockFunctions = require('../src/mockFunctions');

jest.mock('../src/mockFunctions.js');

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
    mockFunctions.add.mockImplementation((a, b) => a + b);
    expect(mockFunctions.add(1, 2)).toBe(3);
    expect(mockFunctions.add(8, 37)).toBe(45);
    expect(mockFunctions.add(-11, 25)).toBe(14);
    expect(mockFunctions.add(13, -188)).toBe(-175);
    expect(mockFunctions.add(7, 26)).toBe(33);
  });
  test('testa função subtract', () => {
    mockFunctions.subtract.mockImplementation((a, b) => a - b);
    expect(mockFunctions.subtract(899, 35)).toBe(864);
    expect(mockFunctions.subtract(-17, 333)).toBe(-350);
    expect(mockFunctions.subtract(45, 97)).toBe(-52);
    expect(mockFunctions.subtract(23, -108)).toBe(131);
    expect(mockFunctions.subtract(-133, -29)).toBe(-104);
  });
  test('testa função multiply', () => {
    mockFunctions.multiply.mockImplementation((a, b) => a * b);
    expect(mockFunctions.multiply(1, 2)).toBe(2);
    expect(mockFunctions.multiply(0, 5)).toBe(0);
    expect(mockFunctions.multiply(-4, 9)).toBe(-36);
    expect(mockFunctions.multiply(-12, -7)).toBe(84);
    expect(mockFunctions.multiply(19, 23)).toBe(437);
  });
  test('testa função divide', () => {
    mockFunctions.divide.mockImplementation((a, b) => a / b);
    expect(mockFunctions.divide(169, 13)).toBe(13);
    expect(mockFunctions.divide(-1900, 5)).toBe(-380);
    expect(mockFunctions.divide(42, 7)).toBe(6);
    expect(mockFunctions.divide(729, 243)).toBe(3);
    expect(mockFunctions.divide(1331, 11)).toBe(121);
  });
  test('testa função power', () => {
    const multiply = (a, b) => a * b;
    mockFunctions.power.mockImplementation((a, b) => {
      let pow = a;
      for (let i = 1; i < b; i += 1) {
        pow = multiply(pow, a);
      }
      return pow;
    });
    expect(mockFunctions.power(10, 2)).toBe(100);
    expect(mockFunctions.power(2, 10)).toBe(1024);
    expect(mockFunctions.power(5, 5)).toBe(3125);
    expect(mockFunctions.power(1, 10)).toBe(1);
    expect(mockFunctions.power(0, 0)).toBe(0);
  });
  test('testa função factorial', () => {
    mockFunctions.factorial.mockImplementation((a) => {
      let fact = 1;
      for (let i = a; i > 1; i -= 1) {
        fact *= i;
      }
      return fact;
    });
    expect(mockFunctions.factorial(5)).toBe(120);
    expect(mockFunctions.factorial(10)).toBe(3628800);
    expect(mockFunctions.factorial(3)).toBe(6);
    expect(mockFunctions.factorial(8)).toBe(40320);
    expect(mockFunctions.factorial(2)).toBe(2);
  });
});
