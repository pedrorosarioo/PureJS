var instancia1= [
    {nome: 'Aline',exc: 2},
    {nome: 'Julia', exc: 3},
    {nome: 'Vinicius', exc: 4}, 
    {nome: 'Rita', exc: 3},
    {nome: 'Pedro', exc: 10}, 
    {nome: 'Thiago', exc: 8},
    {nome: 'Alex', exc: 9},
    {nome: 'Giovanni', exc: 2}];

var instancia2= [
    {nome: 'Davi',exc: 7},
    {nome: 'Patricia', exc: 5},
    {nome: 'Bianca', exc: 7}, 
    {nome: 'Matheus', exc: 7},
    {nome: 'Ines', exc: 7}, 
    {nome: 'Henrique', exc: 8},
    {nome: 'Yan', exc: 12},
    {nome: 'Ana', exc: 2}];

var instancias = [];
instancias.push(instancia1);
instancias.push(instancia2);

function getMaior(compet1,compet2){
	if (compet1.nome>compet2.nome) return compet1;
  	else return compet2;
};

function encontraReprovado(competidores){
  	var i=0, reprovado = competidores[0];
      competidores.forEach((item)=>{
        if (reprovado.exc>item.exc) reprovado = item;
        else if (reprovado.exc==item.exc) reprovado = getMaior(reprovado,item);
      });
  	return reprovado;
}

function logReprovados(instancias){
	instancias.forEach((item, index)=>{
    	console.log('Instancia '+(index+1)+':');
      	console.log(encontraReprovado(item).nome+' '+encontraReprovado(item).exc+'\n\n');
    });
}

logReprovados(instancias);
