const fs = require('fs');
//ler um arquivo

//assincrono
console.log('inicio')
fs.readFile('./teste.txt',{encoding:'utf-8',flag:'r+'} ,(err,data) => {
  if(err) {
    console.log('Erro ao ler o arquivo');
  } else {
    console.log('conteudo: ', data);
  }
})
console.log('fim')

//sincrono
console.log('inicio2')
try{
  const data = fs.readFileSync('./teste.txt', 'utf-8');
  console.log('conteudo 2:', data);
} catch (err) {
  console.log('Erro ao ler o arquivo');
}
console.log('fim2')

//promise
async function readFile() {
  try {
    const data = await fs.promises.readFile('./teste.txt', 'utf-8');
    console.log('conteudo 3:', data);
  } catch (err) {
    console.log('Erro ao ler o arquivo');
  }
}
readFile()