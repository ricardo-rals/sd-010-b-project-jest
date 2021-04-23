const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'
Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.
ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende', () =>
    answerPhone('true').then((answer) => { /* ao adotar 'true' como parâmetro, então espera-se que a resposta da função answerPhone seja a resposta "answer", que é igual a 'Oi!' */
      expect(answer).toEqual('Oi!');
    }));
  test('ocupado', () => {
    answerPhone('false').catch((error) => { /* ao adotar 'false' como parâmetro, então espera-se que a resposta da função answerPhone seja o erro, retornando a mensagem 'Infelizmente não podemos atender...' */
      expect(error).toEqual('Infelizmente não podemos atender...');
    });
  });
});
