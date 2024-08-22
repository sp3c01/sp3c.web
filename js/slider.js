let count = 1;
document.getElementById("item-1").checked = true;


function nextImage(){
    document.getElementById("codigoEscolhido-"+count).classList.remove("escolhido");
    count++;
    if(count>11){
        count = 1
    }
    document.getElementById("item-"+count).checked = true;
    document.getElementById("codigoEscolhido-"+count).classList.add("escolhido");
}

var intervalo = setInterval(nextImage,200);

setTimeout(function(){
    document.getElementById("textoCarregandoCodigo").style.display = "none";
    document.getElementById("textoCodigoEncontrado").style.display = "flex";
    document.getElementById("codigoBarras").style.display = "block";
    clearInterval(intervalo);
}, 3000);