function connectWebSocket() {
  websocket = new WebSocket("wss://ephemeral-service.onrender.com");
  // websocket = new WebSocket("ws://localhost:7070");

  websocket.onopen = (event) => {
    console.log("[WebSocket] Conexão estabelecida com o servidor.");
  };

  websocket.onmessage = processMessageClient;

  websocket.onclose = (event) => {
    console.warn("[WebSocket] Conexão fechada. Reconectando...");

    setTimeout(connectWebSocket, 2000);
  };

  websocket.onerror = (error) => {
    console.error("[WebSocket] Erro: ", { error });
  };
}
