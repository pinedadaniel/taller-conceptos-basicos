var casas = ["Gryffindor(G)","Ravenclaw(R)","Slytherin(S)","Hufflepuff(H)","Hatstall"];
var miembrosPorCasa = [0,0,0,0,0];
var porcentajePorCasa = [0,0,0,0,0];
var asignasiones = 16;
var eleccion = "";
var max = 0;


//Procedimientos

for (var i = 0; i < asignasiones; i++) {
    
    eleccion = prompt("Escoge una letra en representacion de una casa, Gryffindor(G), Ravenclaw(R), Slytherin(S) y Hufflepuff(H). Cualquier otra letra se en tenderá como un Hatstall ")
    eleccion=eleccion.toUpperCase();

switch (eleccion) {
    case 'G':
        miembrosPorCasa[0] += 1; 
        break;
    case 'R':
        miembrosPorCasa[1] += 1; 
        break;    
    case 'S':
        miembrosPorCasa[2] += 1; 
        break;    
    case 'H':
        miembrosPorCasa[3] += 1; 
        break;    

    default:
            miembrosPorCasa[4] += 1; 
        break;
}
    
}

for (var x = 0; x < casas.length; x++) {
    porcentajePorCasa[x] = miembrosPorCasa[x] * 100/asignasiones;
    document.write("<h3> El porcentaje de "+casas[x]+" es del "+porcentajePorCasa[x]+"%");
   
    if (max < porcentajePorCasa[x]) {
        max = porcentajePorCasa[x];    
    }
}

for (var n = 0; n < casas.length; n++) {
    if (porcentajePorCasa[n] == max) {
        document.write("<h2> La casa dominante es: "+casas[n])
    }else{
        document.write("<h2> La clasificacion de "+casas[n]+" fue normal.")
    }    
}
