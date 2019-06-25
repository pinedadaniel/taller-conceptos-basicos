
var facciones = ["Abanegacion","Cordialidad","Erudición","Osadía","Verdad","Divergente"];
var cantidadPorFaccion = [0,0,0,0,0,0];
var porcentajePorFaccion = [0,0,0,0,0,0];
var asignacion = 20;
var eleccion = "";
var porcentajeMiembros = 0;



//PROCEDIMIENTO


for (var i = 0; i < asignacion; i++) {
    eleccion = prompt("USUARIO "+(i+1)+' escoge una facción Abnegacion(A), Cordialidad(C), Erudición(E), Osadía(O) y Verdad(V)" .Cualquier otra letra será entendida como que ha aparecido un Divergente: ');
    eleccion = eleccion.toUpperCase();

      switch (eleccion) {
         case 'A':
             cantidadPorFaccion[0]=cantidadPorFaccion[0]+1;
             break;
          case 'C':
            cantidadPorFaccion[1]=cantidadPorFaccion[1]+1;
            break;
           case 'E':
            cantidadPorFaccion[2]=cantidadPorFaccion[2]+1;
            break;
           case 'O':
            cantidadPorFaccion[3]=cantidadPorFaccion[3]+1;
            break;
            case 'V':
            cantidadPorFaccion[4]=cantidadPorFaccion[4]+1;
               break;
   
            default:             
            cantidadPorFaccion[5]=cantidadPorFaccion[5]+1;
            break;
      } 
    }


   //DATOS DE SALIDA

    for (var n = 0; n < facciones.length; n++) {
      porcentajePorFaccion[n] = cantidadPorFaccion[n] * 100 / asignacion;
      document.write("<h3>El total de miebros en la facción "+facciones[n]+" es de "+cantidadPorFaccion[n]+" con un porcentaje del: "+porcentajePorFaccion[n]+"%");
   }

  
porcentajeMiembros = porcentajePorFaccion[3] + porcentajePorFaccion[5]; 


   if (porcentajeMiembros > 40) {
      document.write("<h1> Jeanine, puedes proceder con la dominación total!.");

   }else if (porcentajePorFaccion[2] < porcentajePorFaccion[0,1,3,4] && porcentajePorFaccion[5] == 0){
      document.write("<h1> Jeanine, ¡te tocó aplazar tu maléfico plan!");

   }