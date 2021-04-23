// ATENÇÃO!!! Não edite este arquivo. Altere apenas os arquivos da pasta 'test'.
const answerPhone = (answer) =>
  new Promise(function (resolve, reject) {
    setTimeout(
      answer ? resolve('Oi!') : reject(new Error('Infelizmente não podemos atender...')), 3000,
    );
  });

module.exports = answerPhone;


// const answerPhone = answer => new Promise(function (resolve, reject) {
//   setTimeout(answer ? resolve('Oi!') : reject('Infelizmente não podemos atender...'), 3000);
// });

// const test = async () => {
//   const test = await answerPhone(false).catch((e) => e);
//   console.log(test);
// }
// test();