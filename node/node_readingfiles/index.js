const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;
const tasksFilePath = path.join(__dirname, 'tasks.json');
const logsFilePath = path.join(__dirname, 'logs.txt');

app.use(express.json());

// Função para registrar logs
async function logOperation(message) {
  const timestamp = new Date().toISOString();
  await fs.appendFile(logsFilePath, `${timestamp} - ${message}\n`);
}

// Função para ler tarefas
async function readTasks() {
  const data = await fs.readFile(tasksFilePath, 'utf-8');
  return JSON.parse(data);
}

// Função para escrever tarefas
async function writeTasks(tasks) {
  await fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));
}

// Rota para retornar todas as tarefas
app.get('/tasks', async (req, res) => {
  const { sprint, responsavel, limit = 10 } = req.query;
  let tasks = await readTasks();

  if (sprint) {
    tasks = tasks.filter(task => task.sprint == sprint);
  }
  if (responsavel) {
    tasks = tasks.filter(task => task.responsavel === responsavel);
  }

  res.json(tasks.slice(0, limit));
});

// Rota para retornar uma tarefa específica
app.get('/tasks/:id', async (req, res) => {
  const tasks = await readTasks();
  const task = tasks.find(t => t.id == req.params.id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).send('Tarefa não encontrada');
  }
});

// Rota para criar uma tarefa
app.post('/tasks', async (req, res) => {
  const { titulo, descricao, concluida, responsavel, prazo, sprint, prioridade } = req.body;

  if (!titulo || !descricao || !responsavel || !prazo || !sprint || !prioridade) {
    return res.status(400).send('Todos os campos são obrigatórios');
  }

  const tasks = await readTasks();
  const newId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1; // Gera o próximo ID
  const newTask = { id: newId, titulo, descricao, concluida, responsavel, prazo, sprint, prioridade };

  tasks.push(newTask);
  await writeTasks(tasks);
  await logOperation(`Tarefa criada: ${JSON.stringify(newTask)}`);
  res.status(201).json(newTask);
});

// Rota para atualizar uma tarefa existente
app.put('/tasks/:id', async (req, res) => {
  const tasks = await readTasks();
  const index = tasks.findIndex(t => t.id == req.params.id);

  if (index === -1) {
    return res.status(404).send('Tarefa não encontrada');
  }

  tasks[index] = { id: tasks[index].id, ...req.body }; // Mantém o ID existente
  await writeTasks(tasks);
  await logOperation(`Tarefa atualizada: ${JSON.stringify(tasks[index])}`);
  res.json(tasks[index]);
});

// Rota para deletar uma tarefa específica
app.delete('/tasks/:id', async (req, res) => {
  const tasks = await readTasks();
  const newTasks = tasks.filter(t => t.id != req.params.id);

  if (newTasks.length === tasks.length) {
    return res.status(404).send('Tarefa não encontrada');
  }

  await writeTasks(newTasks);
  await logOperation(`Tarefa deletada: ID ${req.params.id}`);
  res.status(204).send();
});

// Rota para deletar todas as tarefas de uma pessoa
app.delete('/tasks', async (req, res) => {
  const { responsavel } = req.query;
  if (!responsavel) {
    return res.status(400).send('Responsável é obrigatório');
  }

  const tasks = await readTasks();
  const newTasks = tasks.filter(t => t.responsavel !== responsavel);

  if (newTasks.length === tasks.length) {
    return res.status(404).send('Nenhuma tarefa encontrada para o responsável especificado');
  }

  await writeTasks(newTasks);
  await logOperation(`Todas as tarefas deletadas para o responsável: ${responsavel}`);
  res.status(204).send();
});

// Rota para marcar uma tarefa como concluída
app.patch('/tasks/:id/concluida', async (req, res) => {
  const tasks = await readTasks();
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) {
    return res.status(404).send('Tarefa não encontrada');
  }

  task.concluida = true;
  await writeTasks(tasks);
  await logOperation(`Tarefa marcada como concluída: ID ${req.params.id}`);
  res.json(task);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});