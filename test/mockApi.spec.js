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
// https://github.com/tryber/sd-010-b-project-jest/pull/114/commits/69599eb6353293d1f2aab21460b2f4a852b8ea9c
// https://jestjs.io/pt-BR/docs/mock-functions
describe('verifica o usuário', () => {
  // Crie  =sua mock da função fetchURL() aqui
  const userB = {
  // primeiro objeto
    gender: 'male',
    // name e outro objeto
    name: {
      title: 'Miss',
      first: 'Antônio',
      last: 'Britto' },
    // location e outro objeto
    location: {
      street: {
        number: 5988,
        name: 'Main North Road' },
      city: 'Porirua',
      state: 'Hawke\'S Bay',
      country: 'Brazil',
      postcode: 11350,
      coordinates: {
        latitude: '64.7118',
        longitude: '24.3681',
      },
      timezone: {
        offset: '-3:00',
        description: 'Brazil, Buenos Aires, Georgetown',
      },
    }, // até aqui a location
    // informações de cadastro
    email: 'tunico@bol.com.br',
    login: {
      uuid: '0c3597a4-06a1-4ddf-9a96-14f72d07a6f9',
      username: 'tunicao123',
      password: '1234567890',
      salt: 'yOh227LN',
      md5: '4ff15529498594a2e384797f0f84b4c2',
      sha1: '7730fd5d28dfe1ba2690eb10b991f15283b7ba71',
      sha256: '6fefc79e3ec602fcffa4c138254c84f0d6a3700dbde749b067a8aac9385a147c',
    },
    dob: {
      date: '1998-05-22T06:43:38.567Z',
      age: 23,
    },
    registered: {
      date: '2010-01-03T16:01:37.854Z',
      age: 11,
    },
    phone: '(804)-639-6224',
    cell: '(784)-844-1267',
    id: {
      name: '',
      value: null,
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/14.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/14.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/14.jpg',
    },
    nat: 'NZ',
  };
  api.fetchURL = jest.fn().mockResolvedValue(userB);
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
