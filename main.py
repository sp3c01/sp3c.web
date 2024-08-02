# app.py

from flask import Flask, render_template_string
from flask_socketio import SocketIO, send

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route('/')
def home():
    return render_template_string('''
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Chat</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background: url('https://i.im.ge/2024/08/02/fMKgpa.1000302869.jpeg') no-repeat center center fixed;
                background-size: cover;
                margin: 0;
                padding: 0;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #ddd;
            }
            #loading-screen {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
                width: 100vw;
                background-color: rgba(17, 17, 17, 0.9); /* Slightly transparent background */
                position: absolute;
                top: 0;
                left: 0;
            }
            .spinner {
                border: 8px solid #f3f3f3; /* Light grey */
                border-top: 8px solid #444; /* Dark grey */
                border-radius: 50%;
                width: 60px;
                height: 60px;
                animation: spin 2s linear infinite;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            #chat {
                display: none;
                max-width: 600px;
                width: 100%;
                height: 80vh;
                display: flex;
                flex-direction: column;
                border: 1px solid #444;
                border-radius: 10px;
                background-color: rgba(34, 34, 34, 0.8); /* Slightly transparent background */
                position: relative;
            }
            #messages {
                list-style-type: none;
                padding: 10px;
                margin: 0;
                flex: 1;
                overflow-y: auto;
                display: flex;
                flex-direction: column-reverse;
            }
            #messages li {
                padding: 8px;
                margin-bottom: 10px;
                border-radius: 5px;
                background-color: #333;
            }
            #message-form {
                display: flex;
                align-items: center;
                padding: 10px;
                border-top: 1px solid #444;
                background-color: rgba(17, 17, 17, 0.9); /* Slightly transparent background */
            }
            #message-input {
                flex: 1;
                padding: 10px;
                border: 1px solid #444;
                border-radius: 5px;
                background-color: #111;
                color: #ddd;
                margin-right: 10px;
            }
            #send-button {
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                background-color: #444;
                color: #ddd;
                cursor: pointer;
            }
            #send-button:hover {
                background-color: #555;
            }
            #username-input {
                width: 100%;
                padding: 10px;
                border: 1px solid #444;
                border-radius: 5px;
                background-color: #111;
                color: #ddd;
                margin-bottom: 10px;
            }
        </style>
    </head>
    <body>
        <div id="loading-screen">
            <div class="spinner"></div>
        </div>
        <div id="chat">
            <input id="username-input" placeholder="Digite seu nome de usuário..." />
            <ul id="messages"></ul>
            <div id="message-form">
                <input id="message-input" autocomplete="off" placeholder="Digite sua mensagem..." />
                <button id="send-button">Enviar</button>
            </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.4.1/socket.io.min.js"></script>
        <script>
            var socket = io();
            var username = '';

            // Tela de carregamento
            window.onload = function() {
                setTimeout(function() {
                    document.getElementById('loading-screen').style.display = 'none';
                    document.getElementById('chat').style.display = 'block';
                }, 2000); // 2 segundos
            };

            document.getElementById('username-input').addEventListener('blur', function() {
                username = this.value || 'Anônimo';
                document.getElementById('username-input').style.display = 'none';
            });

            document.getElementById('send-button').addEventListener('click', function() {
                sendMessage();
            });

            document.getElementById('message-input').addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    sendMessage();
                }
            });

            function sendMessage() {
                var messageInput = document.getElementById('message-input');
                var message = messageInput.value;
                if (message.trim() !== '') {
                    socket.send(username + ': ' + message);
                    messageInput.value = '';
                }
            }

            socket.on('message', function(msg) {
                var messages = document.getElementById('messages');
                var li = document.createElement('li');
                li.textContent = msg;
                messages.appendChild(li);
                messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
            });
        </script>
    </body>
    </html>
    ''')

@socketio.on('message')
def handle_message(msg):
    send(msg, broadcast=True)

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)
