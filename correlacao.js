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

let tabelar = function(habito, Pessoas){
  tabela = [0,0,0,0];
	for(amostra of Pessoas){
      let cont=0;
      if (amostra.hobbies.includes(habito)) cont++;
      if (amostra.lobisomen) cont+=2;
      tabela[cont]++;
    }
  return tabela;
}

let correlacao = function(tabela){
	return (tabela[0]*tabela[3]-tabela[1]*tabela[2])/
      Math.sqrt(
      	(tabela[1]+tabela[3])*
      	(tabela[0]+tabela[2])*
      	(tabela[2]+tabela[3])*
      	(tabela[0]+tabela[1])
      );
}

let todosOsHobbies = function(Pessoas){
	costume = [];
  	for(amostra of Pessoas){
    	for(habito of amostra.hobbies){
        	if (!costume.includes(habito)) costume.push(habito);
        }
    }
  	return costume;
}

for (amostra of todosOsHobbies(catalogoPessoas)){
	console.log(amostra+": "+correlacao(tabelar(amostra,catalogoPessoas)));
}