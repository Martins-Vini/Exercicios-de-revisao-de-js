import inquirer from 'inquirer';

async function numberSeven() {
  let numero;

  do {
    const answer = await inquirer.prompt([
      {
        type: 'input',
        name: 'num',
        message: 'Digite um número:',
      },
    ]);

    numero = Number(answer.num);
  } while (numero !== 7);

  console.log('Você digitou 7!');
}

numberSeven();
