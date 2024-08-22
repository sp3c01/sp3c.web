   // Dados a serem enviados no corpo da solicitaÃ§Ã£o
   const requestData = {
    access_token: "XXXXX",
    clickid: "XXXXX",
    event_name: "EVENT_XXXXX",
    is_attributed: 1,
    mmpcode: "PL",
    pixelId: "XXXXX",
    pixelSdkVersion: "9.9.9",
    properties: {
    content_id: "XXXXX",
    content_type: "XXXXX",
    content_name: "XXXXX"
    },
    testFlag: false,
    third_party: "XXX",
    trackFlag: true // ou false
};

// URL de destino da solicitaÃ§Ã£o
const url = "http://www.adsnebula.com/log/common/api";

// ConfiguraÃ§Ã£o da solicitaÃ§Ã£o
const requestOptions = {
    method: "POST",
    headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
    },
    body: JSON.stringify(requestData)
};

// Realiza a solicitaÃ§Ã£o usando a API Fetch
fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Erro na solicitaÃ§Ã£o:", error));



const inicioDiv = document.getElementById('inicio');
const saqueDiv = document.getElementById('saque');
const loginDiv = document.getElementById('login');
const bonusDiv = document.getElementById('bonus');

function playAudio() {
    var audio = document.getElementById("meuAudio");
    audio.play();
}

// FunÃ§Ã£o para definir um cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${cvalue}; ${expires}; path=/`;
}

// FunÃ§Ã£o para obter o valor de um cookie
function getCookie(cname) {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

let valor = parseFloat(getCookie('valor')) || 142.53;
const valorSpan = document.getElementById('valor');
const valorSpanSaque = document.getElementById('valor-saque');
const valorSpanMoney = document.getElementById('valor-money');

function atualizarValor() {
    valorSpan.textContent = `R$ ${valor.toFixed(2)}`;
    valorSpanSaque.textContent = `R$ ${valor.toFixed(2)}`;
    valorSpanMoney.textContent = `R$ ${valor.toFixed(2)}`;
    setCookie('valor', valor.toFixed(2), 365); // Armazena o valor como um cookie vÃ¡lido por 1 ano
}

atualizarValor(); // Atualiza o valor inicial na caixa de valor

// Array com os valores desejados
const valoresDesejados = [33, 34, 47, 43, 52, 32, 32, 27, 30, 43];

// FunÃ§Ã£o para aumentar o valor
function aumentarValor() {
    // Se ainda houver valores no array
    if (valoresDesejados.length > 0) {
        // Retira o prÃ³ximo valor do array
        const valorIncremento = valoresDesejados.shift();

        // Adiciona o valor ao total
        valor += valorIncremento;

        // Atualiza e verifica o valor
        atualizarValor();
        verificarValor();
    }
}  





function mostrarPagina(pagina) {
  inicioDiv.style.display = pagina === 'inicio' ? 'block' : 'none';
  saqueDiv.style.display = pagina === 'saque' ? 'block' : 'none';
  loginDiv.style.display = pagina === 'login' ? 'block' : 'none';
  bonusDiv.style.display = pagina === 'bonus' ? 'block' : 'none';
}

function trocarDiv(esconderId, mostrarId) {
  document.getElementById(esconderId).style.display = 'none';
  document.getElementById(mostrarId).style.display = 'block';
}

// Atualizar o valor exibido inicialmente
atualizarValor();




//--------------------------------- Ad 1 ---------------------------------


function showPopupB1() {
    document.getElementById('B1').disabled = true;
    document.getElementById('popupB1').style.display = 'block';
}

function closePopupB1() {
    document.getElementById('popupB1').style.display = 'none';
    document.getElementById('B1').disabled = true;
}   

// Carregando B1
    function showLoadingB1() {
        var button = document.getElementById("B1");
            showPopupB1();
            playAudio();
            // Simulando um atraso de 3 segundos para o showPopup2()
            setTimeout(function () {
                closePopupB1();
                aumentarValor();
                trocarDiv('ad1', 'ad2');
            }, 4000); // 3 segundos
        }


//--------------------------------- Ad 2 ---------------------------------


function showPopupB2() {
    document.getElementById('popupB2').style.display = 'block';
    document.getElementById('B2').disabled = true;
}

function closePopupB2() {
    document.getElementById('popupB2').style.display = 'none';
    document.getElementById('B2').disabled = true;
}   

// Carregando B2
    function showLoadingB2() {
        var button = document.getElementById("B2");
            showPopupB2();
            playAudio();
            // Simulando um atraso de 3 segundos para o showPopup2()
            setTimeout(function () {
                closePopupB2();
                aumentarValor();
                trocarDiv('ad2', 'ad3');
            }, 4000); // 3 segundos
        }

    
//--------------------------------- Ad 3 ---------------------------------


function showPopupB3() {
    document.getElementById('popupB3').style.display = 'block';
    document.getElementById('B3').disabled = true;
}

function closePopupB3() {
    document.getElementById('popupB3').style.display = 'none';
    document.getElementById('B3').disabled = true;
}   


    function showLoadingB3() {
        var button = document.getElementById("B3");
            showPopupB3();
            playAudio();
            setTimeout(function () {
                closePopupB3();
                aumentarValor();
                trocarDiv('ad3', 'ad4');
            }, 4000); 
        }


//--------------------------------- Ad 4 ---------------------------------


function showPopupB4() {
    document.getElementById('popupB4').style.display = 'block';
    document.getElementById('B4').disabled = true;
}

function closePopupB4() {
    document.getElementById('popupB4').style.display = 'none';
    document.getElementById('B4').disabled = true;
}   


    function showLoadingB4() {
        var button = document.getElementById("B4");
            showPopupB4();
            playAudio();
            setTimeout(function () {
                closePopupB4();
                aumentarValor();
                trocarDiv('ad4', 'ad5');
            }, 4000); 
        }


//--------------------------------- Ad 5 ---------------------------------


function showPopupB5() {
    document.getElementById('popupB5').style.display = 'block';
    document.getElementById('B5').disabled = true;
}

function closePopupB5() {
    document.getElementById('popupB5').style.display = 'none';
    document.getElementById('B5').disabled = true;
}   


    function showLoadingB5() {
        var button = document.getElementById("B5");
            showPopupB5();
            playAudio();
            setTimeout(function () {
                closePopupB5();
                aumentarValor();
                trocarDiv('ad5', 'ad6');
            }, 4000);
        }

    
//--------------------------------- Ad 6 ---------------------------------


function showPopupB6() {
    document.getElementById('popupB6').style.display = 'block';
    document.getElementById('B6').disabled = true;
}

function closePopupB6() {
    document.getElementById('popupB6').style.display = 'none';
    document.getElementById('B6').disabled = true;
}   


    function showLoadingB6() {
        var button = document.getElementById("B6");
            showPopupB6();
            playAudio();
            setTimeout(function () {
                closePopupB6();
                aumentarValor();
                trocarDiv('ad6', 'ad7');
            }, 4000);
        }

//--------------------------------- Ad 7 ---------------------------------


function showPopupB7() {
    document.getElementById('popupB7').style.display = 'block';
    document.getElementById('B7').disabled = true;
}

function closePopupB7() {
    document.getElementById('popupB7').style.display = 'none';
    document.getElementById('B7').disabled = true;
}   


    function showLoadingB7() {
        var button = document.getElementById("B7");
            showPopupB7();
            playAudio();
            setTimeout(function () {
                closePopupB7();
                aumentarValor();
                trocarDiv('ad7', 'ad8');
            }, 4000);
        }


//--------------------------------- Ad 8 ---------------------------------


function showPopupB8() {
    document.getElementById('popupB8').style.display = 'block';
    document.getElementById('B8').disabled = true;
}

function closePopupB8() {
    document.getElementById('popupB8').style.display = 'none';
    document.getElementById('B8').disabled = true;
}   


    function showLoadingB8() {
        var button = document.getElementById("B8");
            showPopupB8();
            playAudio();
            setTimeout(function () {
                closePopupB8();
                aumentarValor();
                trocarDiv('ad8', 'ad9');
            }, 4000);
        }


//--------------------------------- Ad 9 ---------------------------------

function showLoadingB9() {
    var button = document.getElementById("B9");
        document.getElementById('popupB9').style.display = 'block';
        playAudio();
        setTimeout(function () {
            document.getElementById('popupB9').style.display = 'none';
            aumentarValor();
            aumentarValor();
            trocarDiv('ad9', 'ad10');
        }, 4000);
    }



//--------------------------------- Ad 10 ---------------------------------


    function showLoadingB10() {
        var button = document.getElementById("B10");
            document.getElementById('popupB10').style.display = 'block';
            playAudio();
            setTimeout(function () {
                document.getElementById('popupB10').style.display = 'none';
                aumentarValor();
                trocarDiv('ad10', 'ad11');
            }, 4000);
        }


//---------------------------- BotÃ£o chave PIX ---------------------------
 
 
let activeButton = null;

function toggleButton(buttonNumber) {
  const buttons = document.querySelectorAll('.square-button');

  if (activeButton !== null) {
   buttons[activeButton - 1].classList.remove('active');
  }

  if (activeButton === buttonNumber) {
    activeButton = null;
  } else {
    buttons[buttonNumber - 1].classList.add('active');
    activeButton = buttonNumber;
  }
} 
 
 
    
    
    
    
    
    
    

// Popup SAQUE

function showPopup() {
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}  

// Popup LIMITE DIÃRIO

function showPopupL() {
  document.getElementById('popupL').style.display = 'block';
}

function closePopupL() {
  document.getElementById('popupL').style.display = 'none';
}  



// POPUP Limite diÃ¡rio quando bate X valor
function verificarValor() {
    if (valor >= 470 && valor < 475) {
        // Popup para valor >= 1362.60 e < 2725.20
        showPopupL();
    } else if (valor >= 940 && valor < 950) {
        // Popup para valor >= 2725.20 e < 4087.8
        showPopupL();
    } else if (valor >= 1400) {
        // Popup para valor >= 4087.8
        showPopupL();
    }
    
}




function fecharPopupEAgendarReaparecimento() {
    var popupButtonContainer = document.querySelector(".popup-buttonL-container");
    popupButtonContainer.style.display = "none"; // Oculta o botÃ£o

    // Define um temporizador para mostrar o botÃ£o apÃ³s 10 segundos
    setTimeout(function() {
        popupButtonContainer.style.display = "block";
    }, 86400000); // 24 horas

    // Aqui vocÃª tambÃ©m deve adicionar a funÃ§Ã£o para fechar o popup
    closePopupL();
}

// Chama a funÃ§Ã£o para mostrar o botÃ£o apÃ³s 10 segundos (10000 milissegundos)
setTimeout(function() {
    var botaoContainer = document.querySelector(".popup-buttonL-container");
    botaoContainer.style.display = "block";
}, 86400000); // 24 horas


// Script botÃ£o login
function showLoading() {
  var button = document.getElementById("prosseguir-button");
  button.disabled = true; // Desabilitar o botÃ£o enquanto a animaÃ§Ã£o ocorre

  button.innerHTML = '<span class="loading-spinner"></span> Carregando...';

  // Simulando um atraso de 3 segundos para a animaÃ§Ã£o
  setTimeout(function() {
    // Redirecionar apÃ³s o atraso
    mostrarPagina('inicio');
  }, 2000); // 2 segundos
}




function formatarValor(input) {
  // Remove todos os caracteres nÃ£o numÃ©ricos
  var valor = input.value.replace(/[^0-9]/g, '');
  
  // Divide o valor em parte inteira e decimal
  var parteInteira = valor.slice(0, -2);
  var centavos = valor.slice(-2);
  
  // Reconstroi o valor formatado
  input.value = parteInteira + '.' + centavos;
}

function verificarCampos() {
    var email = document.getElementById("email").value;
    var emailValido = /\S+@\S+\.\S+/;

    if (email === "") {
        alert("Insira seu e-mail para logar!");
    } else if (!emailValido.test(email)) {
        alert("Insira um e-mail vÃ¡lido!");
    } else {
        // Se o campo estiver preenchido e for um e-mail vÃ¡lido, redireciona para a prÃ³xima pÃ¡gina
        showLoading();
    }
}


function showPopupInicio() {
    document.getElementById('popupinicio').style.display = 'block';
  }

function closePopupInicio() {
    document.getElementById('popupinicio').style.display = 'none';
}


function in1() {
    closePopupInicio();
    showPopupInicio2();

        // Agendar a exibiÃ§Ã£o do prÃ³ximo apÃ³s 5 segundos
        setTimeout(function() {
            closePopupInicio2();
            showPopupInicio3();
        }, 10000);
}    









function showPopupVideo() {
    document.getElementById('popupvideo').style.display = 'block';
  }

function closePopupVideo() {
    document.getElementById('popupvideo').style.display = 'none';
}

function video() {
    closePopup();
    showPopupVideo();
}   




      
function toggleAnswer(question) {
    const answer = question.nextElementSibling;
    answer.classList.toggle("active");
  
    const allQuestions = document.querySelectorAll(".question");
    allQuestions.forEach((otherQuestion) => {
      if (otherQuestion !== question) {
        otherQuestion.nextElementSibling.classList.remove("active");
      }
    });
  }
  
  
  
  // ----------------- TESTE ANUNCIO 1 -----------------


  document.addEventListener('DOMContentLoaded', function () {
    initializeRatingContainers();
});

function initializeRatingContainers() {
    const containers = document.querySelectorAll('.rating-container');

    containers.forEach(function (container) {
        const buttons = container.querySelectorAll('.rating-button');

        buttons.forEach(function (button) {
            button.addEventListener('click', function () {
                buttons.forEach(function (btn) {
                    btn.classList.remove('active');
                });

                button.classList.add('active');
            });
        });
    });

    addClickEventToCards(); // Adiciona eventos de clique aos elementos existentes
}

function addClickEventToCards() {
    const cards = document.querySelectorAll('.card__grade');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            toggleCard(this);
        });
    });
}

function toggleCard(clickedElement) {
    console.log("Clique detectado em:", clickedElement.id);

    const allCards = document.querySelectorAll('.card__grade');

    allCards.forEach(card => {
        card.classList.remove('active');
    });

    // Adicione um switch para lidar com diferentes ações
    switch (clickedElement.id) {
        case 'card__grade1':
        case 'star1':
            console.log("Caso 1");
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star3', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star4', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star5', 'fa-regular fa-star', '#7e7e7e');
            break;
        case 'card__grade2':
        case 'star2':
            console.log("Caso 2");
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-solid fa-star active', '#ffd700');
            updateStars('star3', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star4', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star5', 'fa-regular fa-star', '#7e7e7e');
            break;
        case 'card__grade3':
        case 'star3':
            console.log("Caso 3");
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-solid fa-star active', '#ffd700');
            updateStars('star3', 'fa-solid fa-star active', '#ffd700');
            updateStars('star4', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star5', 'fa-regular fa-star', '#7e7e7e');
            break;
        case 'card__grade4':
        case 'star4':
            console.log("Caso 4");
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-solid fa-star active', '#ffd700');
            updateStars('star3', 'fa-solid fa-star active', '#ffd700');
            updateStars('star4', 'fa-solid fa-star active', '#ffd700');
            updateStars('star5', 'fa-regular fa-star', '#7e7e7e');
            break;
        case 'card__grade5':
        case 'star5':
            console.log("Caso 5");
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-solid fa-star active', '#ffd700');
            updateStars('star3', 'fa-solid fa-star active', '#ffd700');
            updateStars('star4', 'fa-solid fa-star active', '#ffd700');
            updateStars('star5', 'fa-solid fa-star active', '#ffd700');
            break;
            case 'card__grade6':
                case 'star1':
                    console.log("Caso 1");
                    updateStars('star1', 'fa-solid fa-star active', '#ffd700');
                    updateStars('star2', 'fa-regular fa-star', '#7e7e7e');
                    updateStars('star3', 'fa-regular fa-star', '#7e7e7e');
                    updateStars('star4', 'fa-regular fa-star', '#7e7e7e');
                    updateStars('star5', 'fa-regular fa-star', '#7e7e7e');
                    break;
        // Adicione mais casos conforme necessário
        default:
            // Ação padrão, se nenhum caso corresponder
            console.log("Nenhum caso correspondente");
    }
}

function updateStars(elementId, className, color) {
    const starElement = document.getElementById(elementId);
    if (starElement) {
        starElement.className = className;
        starElement.style.color = color;
    } else {
        console.error("Elemento não encontrado com ID: " + elementId);
    }
}


function addClickEventToNewCards() {
    const newCards = document.querySelectorAll('#bradesco .card__grade');

    newCards.forEach(card => {
        card.addEventListener('click', function () {
            toggleCard(this);
        });
    });
}



$(function() {
	
	$(document).on({
		mouseover: function(event) {
			$(this).find('.far').addClass('star-over');
			$(this).prevAll().find('.far').addClass('star-over');
		},
		mouseleave: function(event) {
			$(this).find('.far').removeClass('star-over');
			$(this).prevAll().find('.far').removeClass('star-over');
		}
	}, '.rate');


	$(document).on('click', '.rate', function() {
		if ( !$(this).find('.star').hasClass('rate-active') ) {
			$(this).siblings().find('.star').addClass('far').removeClass('fas rate-active');
			$(this).find('.star').addClass('rate-active fas').removeClass('far star-over');
			$(this).prevAll().find('.star').addClass('fas').removeClass('far star-over');
		} else {
			console.log('has');
		}
	});
	
});

