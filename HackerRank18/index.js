//Declaracion de variables
var m = 0;
var n = 0;
var t = 0;
// Datos de entrada [INPUT]
do {
    t = prompt("Ingrese el numero de visitas a la heladeria")   
    t = parseInt (t);
} while (t > 50 && t > 1);
document.write(t + "<br/>");

for(k=0; k < t; k++){

do {
    m = prompt("Ingrese la cantidad de dinero agrupado")
    m = parseInt (m);
} while (m >10 && m > 2);
document.write(m + "<br/>" )

do {
    n = prompt("Ingrese la cantidad de sabores")
    sabores = parseInt (n);
} while (n > 10 && n > 2);

// Pocessos y Creacion del Array
document.write(n + "<br/>")  

var cost = [sabores]

for(i=0; i < sabores; i++){

cost[i]= Math.floor((Math.random() * (11-1))+1);


}
// Datos de salida [OUTPUT]
cost.sort()
document.write(cost + "<br/>")
for(l=0; l<1;l++){ 
    cost.indexOf(m);
    if(cost.indexOf(m) == -1){
     document.write(cost.indexOf(m)+ " ----> los indices no corresponden al total del dinero agrupado <br/>") 
    }else{
        document.write(cost.indexOf(m)+ " ----> El indice corresponde al total del dinero agrupado  <br/>")
    }
}
}












