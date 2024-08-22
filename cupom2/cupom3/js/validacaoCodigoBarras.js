function validacaoCodigoBarras1(){
    var validacaoCodigo = document.getElementById("validacaoCodigo");
    var textoCodigoBarras = document.getElementById("textoCodigoBarras");
    var campoCodigoBarras = document.getElementById("codigoBarrasDigitado");
    var codigoEscolhido = document.querySelector(".escolhido").value;      
    var codigoDigitado = document.getElementById("codigoBarrasDigitado").value.replace(/\s/g, ''); 
    
    var saldoAtualizado = document.querySelector(".saldoAtualizado");  
    var boxSaldo = document.querySelector(".boxSaldo"); 


    
    if(codigoDigitado.length > 0){
        campoCodigoBarras.style.textAlign = "center"; 
    } else {
        campoCodigoBarras.style.textAlign = "left"; 
    }

       
    
    if(codigoDigitado.length == 8){
        if(codigoDigitado == codigoEscolhido){
            campoCodigoBarras.blur();
            textoCodigoBarras.classList.remove("textoFalse");
            textoCodigoBarras.classList.add("textoTrue");

            campoCodigoBarras.classList.remove("campoFalse");
            campoCodigoBarras.classList.remove("campoWriting");
            campoCodigoBarras.classList.add("campoTrue");

            validacaoCodigo.innerHTML = "código correto. seu saldo subiu"
            validacaoCodigo.style.color = "green";


            boxSaldo.classList.add("saldoAnimado");
            
            var min = 0;
            var max = 4751;
            var duração = 5000;


            for (var i = min; i <= max; i++) {
                setTimeout(function(i){
                    saldoAtualizado.innerHTML = i/100;
                  },i * 1500 / max, i);  
            }

            const audio = new Audio('assets/audio/moedas.mp3');
            audio.play();

            setTimeout(function() {
                $("#formCupom").submit();
            }, 2500);
        }
        else {
            textoCodigoBarras.classList.remove("textoTrue");
            textoCodigoBarras.classList.add("textoFalse");
            
            campoCodigoBarras.classList.remove("campoTrue");
            campoCodigoBarras.classList.add("campoFalse");
            campoCodigoBarras.classList.remove("campoWriting");

            validacaoCodigo.innerHTML = "código inválido"
            validacaoCodigo.style.color = "red";
        }
    } 
    else if(codigoDigitado.length < 8){
        textoCodigoBarras.classList.remove("textoTrue");
        textoCodigoBarras.classList.remove("textoFalse");

        campoCodigoBarras.classList.remove("campoTrue");
        campoCodigoBarras.classList.remove("campoFalse");
        campoCodigoBarras.classList.add("campoWriting");

        validacaoCodigo.innerHTML = ""
        validacaoCodigo.style.color = "unset";    
    }
}




function validacaoCodigoBarras2(){
    var validacaoCodigo = document.getElementById("validacaoCodigo");
    var textoCodigoBarras = document.getElementById("textoCodigoBarras");
    var campoCodigoBarras = document.getElementById("codigoBarrasDigitado");
    var codigoEscolhido = document.querySelector(".escolhido").value;      
    var codigoDigitado = document.getElementById("codigoBarrasDigitado").value.replace(/\s/g, ''); 
    
    var saldoAtualizado = document.querySelector(".saldoAtualizado");     
    var boxSaldo = document.querySelector(".boxSaldo"); 
    
    if(codigoDigitado.length > 0){
        campoCodigoBarras.style.textAlign = "center"; 
    } else {
        campoCodigoBarras.style.textAlign = "left"; 
    }

       
    
    if(codigoDigitado.length == 8){
        if(codigoDigitado == codigoEscolhido){
            campoCodigoBarras.blur();
            textoCodigoBarras.classList.remove("textoFalse");
            textoCodigoBarras.classList.add("textoTrue");

            campoCodigoBarras.classList.remove("campoFalse");
            campoCodigoBarras.classList.remove("campoWriting");
            campoCodigoBarras.classList.add("campoTrue");

            validacaoCodigo.innerHTML = "código correto. seu saldo subiu"
            validacaoCodigo.style.color = "green";


            boxSaldo.classList.add("saldoAnimado");
            
            var min = 4751;
            var max = 9502;
            var duração = 5000;


            for (var i = min; i <= max; i++) {
                setTimeout(function(i){
                    saldoAtualizado.innerHTML = i/100;
                  },i * 1500 / max, i);  
            }


            const audio = new Audio('assets/audio/moedas.mp3');
            audio.play();

            setTimeout(function() {
                $("#formCupom").submit();
            }, 2500);
        }
        else {
            textoCodigoBarras.classList.remove("textoTrue");
            textoCodigoBarras.classList.add("textoFalse");
            
            campoCodigoBarras.classList.remove("campoTrue");
            campoCodigoBarras.classList.add("campoFalse");
            campoCodigoBarras.classList.remove("campoWriting");

            validacaoCodigo.innerHTML = "código inválido"
            validacaoCodigo.style.color = "red";
        }
    } 
    else if(codigoDigitado.length < 8){
        textoCodigoBarras.classList.remove("textoTrue");
        textoCodigoBarras.classList.remove("textoFalse");

        campoCodigoBarras.classList.remove("campoTrue");
        campoCodigoBarras.classList.remove("campoFalse");
        campoCodigoBarras.classList.add("campoWriting");

        validacaoCodigo.innerHTML = ""
        validacaoCodigo.style.color = "unset";    
    }
}




function validacaoCodigoBarras3(){
    var validacaoCodigo = document.getElementById("validacaoCodigo");
    var textoCodigoBarras = document.getElementById("textoCodigoBarras");
    var campoCodigoBarras = document.getElementById("codigoBarrasDigitado");
    var codigoEscolhido = document.querySelector(".escolhido").value;      
    var codigoDigitado = document.getElementById("codigoBarrasDigitado").value.replace(/\s/g, ''); 
    
    var saldoAtualizado = document.querySelector(".saldoAtualizado");     
    var boxSaldo = document.querySelector(".boxSaldo"); 
    
    if(codigoDigitado.length > 0){
        campoCodigoBarras.style.textAlign = "center"; 
    } else {
        campoCodigoBarras.style.textAlign = "left"; 
    }

       
    
    if(codigoDigitado.length == 8){
        if(codigoDigitado == codigoEscolhido){
            campoCodigoBarras.blur();
            textoCodigoBarras.classList.remove("textoFalse");
            textoCodigoBarras.classList.add("textoTrue");

            campoCodigoBarras.classList.remove("campoFalse");
            campoCodigoBarras.classList.remove("campoWriting");
            campoCodigoBarras.classList.add("campoTrue");

            validacaoCodigo.innerHTML = "código correto. seu saldo subiu"
            validacaoCodigo.style.color = "green";


            boxSaldo.classList.add("saldoAnimado");
            
            var min = 9502;
            var max = 14253;
            var duração = 5000;


            for (var i = min; i <= max; i++) {
                setTimeout(function(i){
                    saldoAtualizado.innerHTML = i/100;
                  },i * 1500 / max, i);  
            }


            const audio = new Audio('assets/audio/moedas.mp3');
            audio.play();

            setTimeout(function() {
                $("#formCupom").submit();
            }, 2500);
        }
        else {
            textoCodigoBarras.classList.remove("textoTrue");
            textoCodigoBarras.classList.add("textoFalse");
            
            campoCodigoBarras.classList.remove("campoTrue");
            campoCodigoBarras.classList.add("campoFalse");
            campoCodigoBarras.classList.remove("campoWriting");

            validacaoCodigo.innerHTML = "código inválido"
            validacaoCodigo.style.color = "red";
        }
    } 
    else if(codigoDigitado.length < 8){
        textoCodigoBarras.classList.remove("textoTrue");
        textoCodigoBarras.classList.remove("textoFalse");

        campoCodigoBarras.classList.remove("campoTrue");
        campoCodigoBarras.classList.remove("campoFalse");
        campoCodigoBarras.classList.add("campoWriting");

        validacaoCodigo.innerHTML = ""
        validacaoCodigo.style.color = "unset";    
    }
}




function validacaoCodigoBarras4(){
    var validacaoCodigo = document.getElementById("validacaoCodigo");
    var textoCodigoBarras = document.getElementById("textoCodigoBarras");
    var campoCodigoBarras = document.getElementById("codigoBarrasDigitado");
    var codigoEscolhido = document.querySelector(".escolhido").value;      
    var codigoDigitado = document.getElementById("codigoBarrasDigitado").value.replace(/\s/g, ''); 
    
    var saldoAtualizado = document.querySelector(".saldoAtualizado");     
    var boxSaldo = document.querySelector(".boxSaldo"); 
    
    if(codigoDigitado.length > 0){
        campoCodigoBarras.style.textAlign = "center"; 
    } else {
        campoCodigoBarras.style.textAlign = "left"; 
    }

       
    
    if(codigoDigitado.length == 8){
        if(codigoDigitado == codigoEscolhido){
            campoCodigoBarras.blur();
            textoCodigoBarras.classList.remove("textoFalse");
            textoCodigoBarras.classList.add("textoTrue");

            campoCodigoBarras.classList.remove("campoFalse");
            campoCodigoBarras.classList.remove("campoWriting");
            campoCodigoBarras.classList.add("campoTrue");

            validacaoCodigo.innerHTML = "código correto. seu saldo subiu"
            validacaoCodigo.style.color = "green";


            boxSaldo.classList.add("saldoAnimado");
            
            var min = 14253;
            var max = 26063;
            var duração = 5000;


            for (var i = min; i <= max; i++) {
                setTimeout(function(i){
                    saldoAtualizado.innerHTML = i/100;
                  },i * 1500 / max, i);  
            }


            const audio = new Audio('assets/audio/moedas.mp3');
            audio.play();

            setTimeout(function() {
                $("#formCupom").submit();
            }, 2500);
        }
        else {
            textoCodigoBarras.classList.remove("textoTrue");
            textoCodigoBarras.classList.add("textoFalse");
            
            campoCodigoBarras.classList.remove("campoTrue");
            campoCodigoBarras.classList.add("campoFalse");
            campoCodigoBarras.classList.remove("campoWriting");

            validacaoCodigo.innerHTML = "código inválido"
            validacaoCodigo.style.color = "red";
        }
    } 
    else if(codigoDigitado.length < 8){
        textoCodigoBarras.classList.remove("textoTrue");
        textoCodigoBarras.classList.remove("textoFalse");

        campoCodigoBarras.classList.remove("campoTrue");
        campoCodigoBarras.classList.remove("campoFalse");
        campoCodigoBarras.classList.add("campoWriting");

        validacaoCodigo.innerHTML = ""
        validacaoCodigo.style.color = "unset";    
    }
}




function validacaoCodigoBarras5(){
    var validacaoCodigo = document.getElementById("validacaoCodigo");
    var textoCodigoBarras = document.getElementById("textoCodigoBarras");
    var campoCodigoBarras = document.getElementById("codigoBarrasDigitado");
    var codigoEscolhido = document.querySelector(".escolhido").value;      
    var codigoDigitado = document.getElementById("codigoBarrasDigitado").value.replace(/\s/g, ''); 
    
    var saldoAtualizado = document.querySelector(".saldoAtualizado");     
    var boxSaldo = document.querySelector(".boxSaldo"); 
    
    if(codigoDigitado.length > 0){
        campoCodigoBarras.style.textAlign = "center"; 
    } else {
        campoCodigoBarras.style.textAlign = "left"; 
    }

       
    
    if(codigoDigitado.length == 8){
        if(codigoDigitado == codigoEscolhido){
            campoCodigoBarras.blur();
            textoCodigoBarras.classList.remove("textoFalse");
            textoCodigoBarras.classList.add("textoTrue");

            campoCodigoBarras.classList.remove("campoFalse");
            campoCodigoBarras.classList.remove("campoWriting");
            campoCodigoBarras.classList.add("campoTrue");

            validacaoCodigo.innerHTML = "código correto. seu saldo subiu"
            validacaoCodigo.style.color = "green";


            boxSaldo.classList.add("saldoAnimado");
            
            var min = 26063;
            var max = 37873;
            var duração = 5000;


            for (var i = min; i <= max; i++) {
                setTimeout(function(i){
                    saldoAtualizado.innerHTML = i/100;
                  },i * 1500 / max, i);  
            }


            const audio = new Audio('assets/audio/moedas.mp3');
            audio.play();

            setTimeout(function() {
                $("#formCupom").submit();
            }, 2500);
        }
        else {
            textoCodigoBarras.classList.remove("textoTrue");
            textoCodigoBarras.classList.add("textoFalse");
            
            campoCodigoBarras.classList.remove("campoTrue");
            campoCodigoBarras.classList.add("campoFalse");
            campoCodigoBarras.classList.remove("campoWriting");

            validacaoCodigo.innerHTML = "código inválido"
            validacaoCodigo.style.color = "red";
        }
    } 
    else if(codigoDigitado.length < 8){
        textoCodigoBarras.classList.remove("textoTrue");
        textoCodigoBarras.classList.remove("textoFalse");

        campoCodigoBarras.classList.remove("campoTrue");
        campoCodigoBarras.classList.remove("campoFalse");
        campoCodigoBarras.classList.add("campoWriting");

        validacaoCodigo.innerHTML = ""
        validacaoCodigo.style.color = "unset";    
    }
}




function validacaoCodigoBarras6(){
    var validacaoCodigo = document.getElementById("validacaoCodigo");
    var textoCodigoBarras = document.getElementById("textoCodigoBarras");
    var campoCodigoBarras = document.getElementById("codigoBarrasDigitado");
    var codigoEscolhido = document.querySelector(".escolhido").value;      
    var codigoDigitado = document.getElementById("codigoBarrasDigitado").value.replace(/\s/g, ''); 
    
    var saldoAtualizado = document.querySelector(".saldoAtualizado");     
    var boxSaldo = document.querySelector(".boxSaldo"); 
    
    if(codigoDigitado.length > 0){
        campoCodigoBarras.style.textAlign = "center"; 
    } else {
        campoCodigoBarras.style.textAlign = "left"; 
    }

       
    
    if(codigoDigitado.length == 8){
        if(codigoDigitado == codigoEscolhido){
            campoCodigoBarras.blur();
            textoCodigoBarras.classList.remove("textoFalse");
            textoCodigoBarras.classList.add("textoTrue");

            campoCodigoBarras.classList.remove("campoFalse");
            campoCodigoBarras.classList.remove("campoWriting");
            campoCodigoBarras.classList.add("campoTrue");

            validacaoCodigo.innerHTML = "código correto. seu saldo subiu"
            validacaoCodigo.style.color = "green";


            boxSaldo.classList.add("saldoAnimado");
            
            var min = 37873;
            var max = 49685;
            var duração = 5000;


            for (var i = min; i <= max; i++) {
                setTimeout(function(i){
                    saldoAtualizado.innerHTML = i/100;
                  },i * 1500 / max, i);  
            }


            const audio = new Audio('assets/audio/moedas.mp3');
            audio.play();

            setTimeout(function() {
                $("#formCupom").submit();
            }, 2500);
        }
        else {
            textoCodigoBarras.classList.remove("textoTrue");
            textoCodigoBarras.classList.add("textoFalse");
            
            campoCodigoBarras.classList.remove("campoTrue");
            campoCodigoBarras.classList.add("campoFalse");
            campoCodigoBarras.classList.remove("campoWriting");

            validacaoCodigo.innerHTML = "código inválido"
            validacaoCodigo.style.color = "red";
        }
    } 
    else if(codigoDigitado.length < 8){
        textoCodigoBarras.classList.remove("textoTrue");
        textoCodigoBarras.classList.remove("textoFalse");

        campoCodigoBarras.classList.remove("campoTrue");
        campoCodigoBarras.classList.remove("campoFalse");
        campoCodigoBarras.classList.add("campoWriting");

        validacaoCodigo.innerHTML = ""
        validacaoCodigo.style.color = "unset";    
    }
}