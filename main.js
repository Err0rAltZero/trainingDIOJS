function soma(n1,n2){
    return n1+n2
}
var validar=0;
function validaIdade(idade){
    validar;
    if(idade >= 18){
        var validar = true;
    }else{
        validar=false;
    }
    return validar;    
}
var idade=prompt("Qual sua idade?")
console.log(validaIdade(idade));
alert(soma(5,10));


/*
var lista=["N1","N2","N3"];
lista.push("N4");
lista.pop("N1");
console.log(lista);
*/
/*
var d=new Date();
alert(d.getMonth()+1);
*/
/*var count;
for(count=0;count<5;count++){
    console.log(count);
}
*/
/*var count=0;
while(count<=5){
    console.log(count);
    count++;
}
*/
/*
var idade=prompt("Idade?")
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/
/*
var fruta=[{nome:"maça",cor:"vermelha"}, {nome:"uva",cor:"roxa"}];
console.log(fruta);
alert(fruta[1].nome)
*/
/*
var fruta={nome:"maça",cor:"vermelha"}
console.log(fruta.cor);
*/
//var lista=["appel","pineapple","orange"];
//lista.push("grape");
//lista.pop("grape");
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));
//var nome="dsadsa"
//var n1=5;
//var n2=3;
//var frase="sadsawwawqwq"
//alert(nome+" tem "+n1+" anos");
//alert(n1+n2);
//consoloe.log(nome);
//console.log(n1*n2);
//console.log(frase.toLowerCase());