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

// revisei o assunto do dia para buscar ajuda:
// https://app.betrybe.com/course/live-lectures/sd-cohort-10-b / 10.3

// site da api
// https://randomuser.me/

describe('verifica o usuário', () => {
  // Crie sua mock da função fetchURL() aqui
  const results = {
    gender: 'male',
    name: {
      title: 'mr',
      first: 'Antônio',
      last: 'Britto',
    },
    location: {
      country: 'Brazil',
      street: '9278 new road',
      city: 'kilcoole',
      state: 'waterford',
      postcode: 93027,
      coordinates: {
        latitude: 20.9267,
        longitude: -7.9310,
      },
      timezone: {
        offset: '-3:30',
        description: 'Newfoundland',
      },
    },
    email: 'tunico@bol.com.br',
    login: {
      uuid: '155e77ee-ba6d-486f-95ce-0e0c0fb4b919',
      username: 'tunicao123',
      password: '1234567890',
      salt: 'TQA1Gz7x',
      md5: 'dc523cb313b63dfe5be2140b0c05b3bc',
      sha1: '7a4aa07d1bedcc6bcf4b7f8856643492c191540d',
      sha256: '74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480',
    },
    dob: {
      date: '1993-07-20T09:44:18.674Z',
      age: 26,
    },
    registered: {
      date: '2002-05-21T10:59:49.966Z',
      age: 17,
    },
    phone: '011-962-7516',
    cell: '081-454-0666',
    id: {
      name: 'PPS',
      value: '0390511T',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/75.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
    },
    nat: 'IE',
  };

  // essa linha "jest.fn" cria uma função falsa / "mockResolvedValue" retorna o "results"
  api.fetchURL = jest.fn().mockResolvedValue(results);

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
