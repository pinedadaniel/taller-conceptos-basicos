let muertos = ['Enanos','Elfos','Humanos','Orcos','Huargos'];
let cantidadMuertosRaza = [0,0,0,0,0];
let codigoRaza =0;

codigo(codigoRaza)

function codigo (codigoRaza) {
        
for (var i = 0; i <  muertos.length; i++) {
    codigoRaza=prompt("Ingrese El numero correspondiente a la raza: 1 para Enanos, 2 para Elfos, 3 para Humanos, 4 para Orcos, 5 para Huargos " )
    codigoRaza = parseInt(codigoRaza)
      switch (codigoRaza) {
         case 1:
            cantidadMuertosRaza[0] = prompt("Ingrese la cantidad de muertos de la raza Enanos")
            cantidadMuertosRaza[0]= parseInt(cantidadMuertosRaza[0])
            document.write("la raza de Enanos tiene : " + cantidadMuertosRaza[0] + " Muertos. "  )
             break;
          case 2:
            cantidadMuertosRaza[1] = prompt("Ingrese la cantidad de muertos de la raza Elfos");
            cantidadMuertosRaza[1]= parseInt(cantidadMuertosRaza[1])
            document.write("la raza de Elfos tiene : " + cantidadMuertosRaza[1] + " Muertos. "  )
            break;
           case 3:
            cantidadMuertosRaza[2] = prompt("Ingrese la cantidad de muertos de la raza Humanos");
            cantidadMuertosRaza[2]= parseInt(cantidadMuertosRaza[2])
            document.write("la raza de Humanos tiene : " + cantidadMuertosRaza[2]+ " Muertos. "   )
            break;
           case 4:
            cantidadMuertosRaza[3] = prompt("Ingrese la cantidad de muertos de la raza Orcos");
            cantidadMuertosRaza[3]= parseInt(cantidadMuertosRaza[3])
            document.write("la raza de Orcos tiene : " + cantidadMuertosRaza[3] + " Muertos. "   )
            break
            case 5:
            cantidadMuertosRaza[4] = prompt("Ingrese la cantidad de muertos de la raza Huargos");
            cantidadMuertosRaza[4]= parseInt(cantidadMuertosRaza[4])
            document.write("la raza de Hugaros tiene : " + cantidadMuertosRaza[4] + " Muertos. " )
            break
            default:  
              alert("El Numero no corresponde a ninguna raza")
           i--;
            break;
      } 
    
    }
        
}
razaMax(cantidadMuertosRaza)

function razaMax (cantidadMuertosRaza){
let max = Math.max(...cantidadMuertosRaza)
document.write("La raza con mayor numero de muertes es : " + max)

}

razaMin(cantidadMuertosRaza)

function razaMin (cantidadMuertosRaza){
let min = Math.min(...cantidadMuertosRaza)

document.write("La raza con menor numero de muertes es : " + min)

}


    













