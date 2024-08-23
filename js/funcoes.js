function mensagem(text) {
      alert('Conteúdo protegido pela nossa politica de privacidade.');
      return false;
    }

    function bloquearCopia(Event) {
      var Event = Event ? Event : window.event;
      var tecla = (Event.keyCode) ? Event.keyCode : Event.which;
      if (sessionStorage.getItem("ultimaTecla") === "17" && tecla === 85) {
        Event.preventDefault();
        window.location = "";
      }
      sessionStorage.setItem("ultimaTecla", tecla);
    }

$(document).keypress(bloquearCopia);
$(document).keydown(bloquearCopia);
$(document).contextmenu(mensagem);
