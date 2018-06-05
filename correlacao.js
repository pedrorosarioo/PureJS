let Pessoa = {
  hobbies: ["Tocar violao","programar", "jogar", "ler", "passear com o cachorro"],
  lobisomem: true
};

let catalogoPessoas =[
  {hobbies:["passear com o cachorro", "assistir serie", "dançar", "jogar bola"],lobisomen: true},
  {hobbies:["namorar", "criar um lobo", "andar de skate", "surfar", "estudar"], lobisomen: false},
  {hobbies: ["correr", "escalar", "dormir"], lobisomen: true},
  {hobbies: ["jogar golf", "passear com o cachorro", "criar um gato", "crossfit"], lobisomen: true},
  {hobbies: ["jogar", "estudar"], lobisomen: true}, 
  Pessoa];

function tabelar(habito, Pessoas){
  tabela = [0,0,0,0];
	Pessoas.forEach(function(amostra){
      let cont=0;
      if (amostra.hobbies.includes(habito)) cont++;
      if (amostra.lobisomen) cont+=2;
      tabela[cont]++;
    });
  return tabela;
}

function correlacao(tabela){
	return (tabela[0]*tabela[3]-tabela[1]*tabela[2])/
      Math.sqrt(
      	(tabela[1]+tabela[3])*
      	(tabela[0]+tabela[2])*
      	(tabela[2]+tabela[3])*
      	(tabela[0]+tabela[1])
      );
}

function todosOsHobbies(Pessoas){
	costume = [];
  	catalogoPessoas.forEach(function(individuo, index, pessoas){
    	individuo.hobbies.forEach(function(habito){
        	if (!costume.includes(habito)) costume.push(habito);
        });
    });
  	return costume;
}

for (amostra of todosOsHobbies(catalogoPessoas)){
	console.log(amostra+": "+correlacao(tabelar(amostra,catalogoPessoas)));
}
