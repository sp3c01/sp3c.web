from flask import Flask, request, render_template_string, redirect
from datetime import datetime
import pytz
import logging

app = Flask(__name__)

# Configura o logging
logging.basicConfig(filename='app.log', level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Lista de tarefas armazenada em memória
tasks = []

# Função para obter o horário atual de Brasília
def get_brasilia_time():
    brasilia_tz = pytz.timezone('America/Sao_Paulo')
    return datetime.now(brasilia_tz).strftime('%d/%m/%Y %H:%M:%S')

# HTML e CSS embutidos no código Python
html_template = """
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tarefas</title>
    <style>
        body {
            background: url('https://i.im.ge/2024/08/17/fLfpgx.1000323879.gif') no-repeat center center fixed;
            background-size: cover;
            font-family: Arial, sans-serif;
            color: #fff;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden; /* Impede a rolagem */
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0); /* Desativa o destaque ao tocar em dispositivos móveis */
        }

        .container {
            background-color: rgba(51, 51, 51, 0.8); /* Transparente com 80% de opacidade */
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            width: 350px; /* Largura reduzida */
            text-align: center;
            position: fixed; /* Fica fixo em relação à janela */
            top: 48%; /* Ajusta a posição para cima */
            left: 50%;
            transform: translate(-50%, -50%); /* Centraliza o painel horizontalmente */
            max-height: 80vh; /* Limita a altura máxima do painel */
            overflow-y: auto; /* Adiciona rolagem interna se necessário */
        }

        .time {
            font-size: 18px;
            margin-bottom: 20px;
            color: #fff;
            font-weight: bold;
        }

        h1 {
            margin-bottom: 20px;
            font-size: 24px;
            color: #fff;
        }

        .task-input {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .task-input input {
            width: 65%;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #555;
            border-radius: 4px;
            background-color: #444;
            color: #fff;
        }

        .task-input button {
            width: 30%;
            padding: 10px;
            background-color: #5bc0de;
            color: #fff;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-left: 5%; /* Afasta um pouco do lado direito */
        }

        .task-input button:hover {
            background-color: #46a5c7;
        }

        #taskList {
            list-style-type: none;
            padding: 0;
            margin: 0 0 20px 0;
            max-height: 200px;
            overflow-y: auto;
        }

        #taskList li {
            background-color: #555;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 4px;
            display: flex;
            justify-content: space-between;
            transition: all 0.3s ease;
        }

        #taskList li:nth-child(odd) {
            background-color: #666;
        }

        .task-actions {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .task-actions form {
            margin: 0;
        }

        .task-actions button {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            color: #fff;
            background: linear-gradient(45deg, #f06, #f0a);
            box-shadow: 0 0 5px rgba(255, 0, 255, 0.6);
            transition: all 0.3s ease;
        }

        .task-actions button:hover {
            box-shadow: 0 0 20px rgba(255, 0, 255, 0.9);
        }

        .task-actions button:first-child {
            background-color: #d9534f;
        }

        .task-actions button:first-child:hover {
            background-color: #c12e2a;
        }

        .task-actions button:last-child {
            background-color: #f0ad4e;
        }

        .task-actions button:last-child:hover {
            background-color: #eb8b2f;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="time">
            Horário de Brasília: <span id="time"></span>
        </div>
        <h1>Lista de Tarefas</h1>

        <form method="POST" action="/add-task">
            <div class="task-input">
                <input type="text" name="task" id="taskInput" placeholder="Digite sua tarefa..." required>
                <button type="submit">Adicionar</button>
            </div>
        </form>

        <ul id="taskList">
            {% for task in tasks %}
            <li>{{ task }}</li>
            {% endfor %}
        </ul>

        <div class="task-actions">
            <form method="POST" action="/remove-task">
                <button type="submit" name="task" value="{{ tasks[-1] }}">Remover Tarefa</button>
            </form>

            <form method="POST" action="/remove-all-tasks">
                <button type="submit">Remover Todas as Tarefas</button>
            </form>
        </div>
    </div>

    <script>
        function updateClock() {
            const now = new Date();
            const options = { timeZone: 'America/Sao_Paulo', hour12: false };
            const timeString = now.toLocaleTimeString('pt-BR', options);
            document.getElementById('time').textContent = timeString;
        }

        setInterval(updateClock, 1000);
        updateClock(); // Initial call to set the time immediately
    </script>
</body>
</html>
"""

@app.route('/')
def index():
    return render_template_string(html_template, tasks=tasks)

@app.route('/add-task', methods=['POST'])
def add_task():
    task = request.form.get('task')
    tasks.append(task)
    logging.info(f'Tarefa adicionada: {task} {get_brasilia_time()}')
    return redirect('/')

@app.route('/remove-task', methods=['POST'])
def remove_task():
    task = request.form.get('task')
    if task in tasks:
        tasks.remove(task)
        logging.info(f'Tarefa removida: {task} {get_brasilia_time()}')
    return redirect('/')

@app.route('/remove-all-tasks', methods=['POST'])
def remove_all_tasks():
    tasks.clear()
    logging.info(f'Todas as tarefas removidas {get_brasilia_time()}')
    return redirect('/')

@app.route('/logs')
def logs():
    try:
        with open('app.log', 'r') as f:
            log_data = f.read()
    except FileNotFoundError:
        log_data = "Arquivo de log não encontrado."
    return render_template_string(logs_template, logs=log_data)

if __name__ == '__main__':
    app.run(debug=True)