function agregarVisor(elemento) {
  let visor = document.getElementById("visor");
  visor.value += elemento;
}

function borrar() {
  document.getElementById("visor").value = "";
}

function operar() {
    let visor = document.getElementById("visor");
    let valor = visor.value;
    if(/^[\-]?[0-9]+([\+|\-|\*|\/][0-9]+)*$/.test(valor)){
        console.log(true);
        visor.value= math.evaluate(valor);
    }
    else{
        console.log(false);
        visor.value= 'Exprecion invalida' ;
        setTimeout( function(){
            visor.value= '';
        } , 2000);
        
    }

 
  
    

}
