function processMessageClient({ data }) {
  console.log("[WebSocket] Mensagem recebida do servidor.");
  const { userId, userName, userColor, userGender, content } = JSON.parse(data);

  const messageType =
    userId === user.id
      ? createMessageElementSelf(content)
      : createMessageElementOther(userName, userColor, userGender, content);

  chatMessages.appendChild(messageType);
  scrollScreenBottom();
}

function sendMessageSocket() {
  const message = {
    userId: user.id,
    userName: user.name,
    userColor: user.color,
    userGender: user.gender,
    content: chatInput.value,
  };

  if (websocket.readyState === 0) {
    alert(
      "Conectando... espere por alguns instantes. Tempo de espera máximo: 30 segundos."
    );
  }

  if (websocket.readyState === 1) {
    websocket.send(JSON.stringify(message));
  }
}
