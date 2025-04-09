// const promessa = new Promise((resolve, reject) => {
//   //aqui ela faz coisas
//   const sucesso = true;
//   if (sucesso) {
//     resolve("Deu certo");
//   } else {
//     reject("Deu errado");
//   }
// });

function calculaAlgo() {
  return new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10);
    if (number > 5) {
      resolve("Deu certo");
    } else {
      reject("Deu errado");
    }
  });
}

calculaAlgo().then((msg) => { console.log(msg) }).catch((msg) => { console.log(`erro ${msg}`) })