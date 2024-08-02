# app.py

from flask import Flask, render_template_string
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

HTML = '''
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-image: url('https://i.im.ge/2024/08/02/fMKgpa.1000302869.jpeg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
        }

        .chat-container {
            width: 100%;
            max-width: 350px;
            height: 100%;
            max-height: 600px;
            background: url('https://i.im.ge/2024/08/02/fMKgpa.1000302869.jpeg') no-repeat center center;
            background-size: cover;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            display: flex;
            flex-direction: column;
            position: relative;
            padding: 10px;
        }

        #chat-box {
            flex: 1;
            overflow-y: auto;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            margin-bottom: 10px;
            background: none; /* Remove o fundo da área de mensagens */
            max-height: 300px; /* Ajuste a altura máxima conforme necessário */
        }

        .message {
            margin-bottom: 10px;
            background: rgba(255, 255, 255, 0.8); /* Fundo semi-transparente para as mensagens */
            padding: 5px;
            border-radius: 5px;
        }

        .message span {
            font-weight: bold;
        }

        .input-container {
            display: flex;
            align-items: center;
        }

        #username {
            width: 70%; /* Reduz a largura do campo de nome */
            padding: 6px;
            margin: 5px 0;
            box-sizing: border-box;
            border-radius: 5px;
            border: 1px solid #ddd;
            background: rgba(255, 255, 255, 0.9); /* Fundo semi-transparente para o input */
            font-size: 0.9em; /* Reduz o tamanho da fonte */
        }

        #message {
            flex: 1;
            padding: 6px;
            margin: 5px 0;
            box-sizing: border-box;
            border-radius: 5px;
            border: 1px solid #ddd;
            background: rgba(255, 255, 255, 0.9); /* Fundo semi-transparente para o input */
            font-size: 0.9em; /* Reduz o tamanho da fonte */
        }

        button {
            padding: 6px 10px;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-left: 5px;
            flex-shrink: 0; /* Garante que o botão não encolha */
        }

        button:focus {
            outline: none;
        }
    </style>
</head>
<body>
    <div class="chat-container">
        <div id="chat-box"></div>
        <input type="text" id="username" placeholder="Enter your name" />
        <div class="input-container">
            <input type="text" id="message" placeholder="Type a message" />
            <button onclick="sendMessage()">Send</button>
        </div>
    </div>
    <script src="https://cdn.socket.io/4.0.0/socket.io.min.js"></script>
    <script>
        const socket = io();

        function appendMessage(username, message) {
            const chatBox = document.getElementById('chat-box');
            const div = document.createElement('div');
            div.classList.add('message');
            div.innerHTML = `<span>${username}:</span> ${message}`;
            chatBox.appendChild(div);
            chatBox.scrollTop = chatBox.scrollHeight; // Scroll para o final
        }

        function sendMessage() {
            const username = document.getElementById('username').value;
            const message = document.getElementById('message').value;

            if (username && message) {
                socket.emit('send_message', { username, message });
                document.getElementById('message').value = '';
            }
        }

        socket.on('receive_message', function(data) {
            appendMessage(data.username, data.message);
        });

        // Ajusta o layout quando o teclado é exibido
        window.addEventListener('resize', function() {
            const chatContainer = document.querySelector('.chat-container');
            chatContainer.style.height = window.innerHeight + 'px';
        });

        // Inicializa o ajuste do layout
        window.dispatchEvent(new Event('resize'));
    </script>
</body>
</html>
'''

@app.route('/')
def index():
    return render_template_string(HTML)

@socketio.on('send_message')
def handle_message(data):
    emit('receive_message', data, broadcast=True)

if __name__ == '__main__':
    socketio.run(app, debug=True)
