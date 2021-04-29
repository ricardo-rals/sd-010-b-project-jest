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

// Crie suas mock functions aqui
// jest.mock('../src/mockFunctions'); // mocka o modulo inteiro de mockFunctions
// jest.genMockFromModule('../src/mockFunctions');

/*
  não funciona declaração closure
  Material consultado: https://ttfb.test.traveloka.com/mocking-system-and-test-lifecycle-in-jest/
 */
// const mockModule = () => ({ add: jest.fn(() => 42) });
// jest.mock('../src/mockFunctions', () => mockModule);

/*
  Mocka inline o módulo mockFunctions implementando cada function dela
  Material consultado:
  https://ttfb.test.traveloka.com/mocking-system-and-test-lifecycle-in-jest/
  https://archive.jestjs.io/docs/en/24.x/jest-object#jestmockmodulename-factory-options
 */
// jest.mock('../src/mockFunctions', () => ({
//   add: jest.fn((number1, number2) => number1 + number2),
//   subtract: jest.fn((number1, number2) => number1 - number2),
//   multiply: jest.fn((number1, number2) => number1 * number2),
//   divide: jest.fn((number1, number2) => number1 / number2),
//   power: jest.fn((number1, number2) => {
//     if (number2 === 0) {
//       return 1;
//     }
//     let pow = number1;
//     for (let i = 0; i < number2 - 1; i += 1) {
//       pow = mockFunctions.multiply(pow, number1);
//     }
//     return pow;
//   }),
//   factorial: jest.fn(() => 42),
// }));

/*
  Mocka cada function do módulo mockFunctions usando spyOn
  Material consultado:
  https://blog.echobind.com/how-to-mock-using-jest-spyon-d13d57a8434d
  https://codewithhugo.com/jest-fn-spyon-stub-mock/
  https://dev.to/qmenoret/mocks-and-spies-with-jest-32gf
  https://archive.jestjs.io/docs/en/24.x/jest-object#jestspyonobject-methodname
 */
// jest.spyOn(mockFunctions, 'add').mockImplementation((number1, number2) => number1 + number2);

describe('verifica as funções e os mocks', () => {
  // foo is a mock function
  /*
    verifica se está mockado
    Material consultado sobre jest.isMockFunction
    https://archive.jestjs.io/docs/en/24.x/jest-object#jestismockfunctionfn
  */
  // console.log(`Add está mockado?: ${jest.isMockFunction(mockFunctions.add)}`);
  /*
    Restaura a implementação original das functions em mockFunctions quando mockado com spyOn
    Material consultado sobre jest.restoreAllMocks()
    https://archive.jestjs.io/docs/en/24.x/jest-object#jestrestoreallmocks
    // mockFunctions.add.mockRestore();

    Material consultado sobre mockFn.mockRestore()
    https://archive.jestjs.io/docs/en/24.x/mock-function-api#mockfnmockrestore
    // jest.restoreAllMocks();
   */

  /*
  // Mocka uma function de mockFunctions
  // Não funciona com jest.genMockFromModule; é necessário que jest.mock('../src/mockFunctions') esteja fora do describe
  mockFunctions.add.mockImplementation((number1, number2) => number1 + number2); */

  test('testa função add', () => {
    /*
      Formas equivalentes usando:
      - jest.fn
      mockFunctions.add = jest.fn((number1, number2) => number1 + number2);

      - mockImplementation; é necessário que jest.mock('../src/mockFunctions') esteja fora do describe
      mockFunctions.add.mockImplementation((number1, number2) => number1 + number2);
    */
    jest.spyOn(mockFunctions, 'add').mockImplementation((number1, number2) => number1 + number2);
    // console.log(`Add está mockado?: ${jest.isMockFunction(mockFunctions.add)}`);

    expect(mockFunctions.add(1, 2)).toEqual(3);
    expect(mockFunctions.add(8, 37)).toEqual(45);
    expect(mockFunctions.add(-11, 25)).toEqual(14);
    expect(mockFunctions.add(13, -188)).toEqual(-175);
    expect(mockFunctions.add(7, 26)).toEqual(33);
  });
  test('testa função subtract', () => {
    jest.spyOn(mockFunctions, 'subtract')
      .mockImplementation((number1, number2) => number1 - number2);

    expect(mockFunctions.subtract(899, 35)).toEqual(864);
    expect(mockFunctions.subtract(-17, 333)).toEqual(-350);
    expect(mockFunctions.subtract(45, 97)).toEqual(-52);
    expect(mockFunctions.subtract(23, -108)).toEqual(131);
    expect(mockFunctions.subtract(-133, -29)).toEqual(-104);
  });
  test('testa função multiply', () => {
    jest.spyOn(mockFunctions, 'multiply')
      .mockImplementation((number1, number2) => number1 * number2);

    expect(mockFunctions.multiply(1, 2)).toEqual(2);
    expect(mockFunctions.multiply(0, 5)).toEqual(0);
    expect(mockFunctions.multiply(-4, 9)).toEqual(-36);
    expect(mockFunctions.multiply(-12, -7)).toEqual(84);
    expect(mockFunctions.multiply(19, 23)).toEqual(437);
  });
  test('testa função divide', () => {
    jest.spyOn(mockFunctions, 'divide')
      .mockImplementation((number1, number2) => number1 / number2);

    expect(mockFunctions.divide(169, 13)).toEqual(13);
    expect(mockFunctions.divide(-1900, 5)).toEqual(-380);
    expect(mockFunctions.divide(42, 7)).toEqual(6);
    expect(mockFunctions.divide(729, 243)).toEqual(3);
    expect(mockFunctions.divide(1331, 11)).toEqual(121);
  });
  test('testa função power', () => {
    jest.spyOn(mockFunctions, 'power')
      .mockImplementation((number1, number2) => {
        if (number2 === 0) {
          return 1;
        }
        let pow = number1;
        for (let i = 0; i < number2 - 1; i += 1) {
          pow = mockFunctions.multiply(pow, number1);
        }
        return pow;
      });

    expect(mockFunctions.power(10, 2)).toEqual(100);
    expect(mockFunctions.power(2, 10)).toEqual(1024);
    expect(mockFunctions.power(5, 5)).toEqual(3125);
    expect(mockFunctions.power(1, 10)).toEqual(1);
    expect(mockFunctions.power(0, 0)).toEqual(1);
  });
  test('testa função factorial', () => {
    jest.spyOn(mockFunctions, 'factorial')
      .mockImplementation((number) => {
        let fact = 1;
        for (let i = 2; i <= number; i += 1) {
          fact *= i;
        }
        return fact;
      });

    expect(mockFunctions.factorial(5)).toEqual(120);
    expect(mockFunctions.factorial(10)).toEqual(3628800);
    expect(mockFunctions.factorial(3)).toEqual(6);
    expect(mockFunctions.factorial(8)).toEqual(40320);
    expect(mockFunctions.factorial(2)).toEqual(2);
  });
});
