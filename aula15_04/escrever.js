const fs = require('fs');
const texto = 'novo texto\n'
//writefile
// fs.writeFile('./teste.txt', texto, (err) => {
//   if(err) {
//     console.log('Erro ao escrever o arquivo');
//   } else {
//     console.log('Arquivo escrito com sucesso');
//   }
// })

//appendFile
fs.appendFile('./teste.txt', texto, {encoding: 'utf-8',}, (err) => {
  if(err) {
    console.log('Erro ao escrever o arquivo');
  } else {
    console.log('Arquivo escrito com sucesso');
  }
})