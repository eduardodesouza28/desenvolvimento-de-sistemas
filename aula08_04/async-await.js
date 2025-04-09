function pegarUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ nome: 'Lucas', idade: 25 });
        }, 2000);
    });
}

// pegarUser().then((user) => console.log(user));

async function mostraUser() {
  try{
    const user = await pegarUser();
    console.log(user);
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}
mostraUser();