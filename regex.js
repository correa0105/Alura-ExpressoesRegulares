/* USANDO EXPRESSÃO REGULARES */

let entrada = "11a22aaa32";
let expressao = /(\d\d)(\w)/g;
let resultado;

while(resultado = expressao.exec(entrada)) {
    console.log(resultado);
}

/* REPLACE EM DATAS */

const data = "27-05-2004";

const dataAjsutada = data.replace(/-/g, "/");

console.log(dataAjsutada);

/* SPLIT EM VALORES */

const arquivo = '100,200-150,200;20';
const valores = arquivo.split(/[,;-]/g);
const somaValores = valores.reduce((acumulado, elementoAtual) => +acumulado + +elementoAtual);

console.log(somaValores);

/* RETORNANDO UM MATCH */

const codigos = 'B121A12112N12212A12N012A0223';
const expressaoRegular = /[A-Za-z]\d+/g;
const codigosExtraidos = codigos.match(expressaoRegular);
let codigoExtraido = "";

codigosExtraidos.forEach(element => {
    codigoExtraido += element[0];
})

console.log(codigoExtraido);