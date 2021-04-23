const api = require('../src/mockApi');

/*
A função fetchURL retorna um JSON com informações de um usuário aleatório buscadas da API 'randomuser.me'.
No entanto, nos testes abaixo, queremos que todas as vezes que chamarmos a API a resposta contenha as informações do nosso adminis..Cof! Cof!.. programador favorito, Tunicão.

Faça um mock da função fetchURL() de forma que,
independa de chamadas de API e retorne as seguintes informações do Tunico:
- Gênero: Masculino
- Primeiro nome: Antônio
- Último nome: Britto
- País: Brasil
- Email: tunico@bol.com.br (Sim, é um email do bol mesmo...)
- Nome de usuário: tunicao123
- Senha: 1234567890 (Usem senhas fortes, crianças!)

Note que as informações devem estar de acordo com o JSON
presente no README.md do projeto.

Dica: Utilizem os métodos jest.fn() ou jest.spyOn().

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('verifica o usuário', () => {
  const userTunico = {
    gender: 'male',
    name: {
      title: 'Mrs',
      first: 'Antônio',
      last: 'Britto',
    },
    location: {
      street: {
        number: 8682,
        name: 'Mevlana Cd',
      },
      city: 'Campo Grande',
      state: 'Mato Grosso DO SUL',
      country: 'Brazil',
      postcode: 71449,
      coordinates: {
        latitude: '71.9287',
        longitude: '6.9729',
      },
      timezone: {
        offset: '-3:30',
        description: 'Newfoundland',
      },
    },
    email: 'tunico@bol.com.br',
    login: {
      uuid: 'e764de54-aae2-4e67-97cc-dfb4590c57e4',
      username: 'tunicao123',
      password: '1234567890',
      salt: 'Q5i4zEKE',
      md5: 'f8bdc65ff74f3b919782a7c99108506d',
      sha1: '565e75330fc41126c6f84bb76fa94f9249bfde24',
      sha256: '58cd3cc09c8dd1d82e8bea95780253ce6ce8037a255403a0b1d932d5978c1640',
    },
  };
  api.fetchURL = jest.fn(api.fetchURL).mockResolvedValue(userTunico);

  test('verifica se o usuário é o tunico', async () => (
    api.fetchURL().then((user) => {
      expect(user.gender).toEqual('male');
      expect(user.name.first).toEqual('Antônio');
      expect(user.name.last).toEqual('Britto');
      expect(user.location.country).toEqual('Brazil');
      expect(user.email).toEqual('tunico@bol.com.br');
      expect(user.login.username).toEqual('tunicao123');
      expect(user.login.password).toEqual('1234567890');
    })
  ));
});
