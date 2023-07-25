import http from 'node:http';

const tasks = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  if(method === 'GET' && url === '/tasks') {
    return res
            .setHeader('Content-Type', 'application/json')
            .end(JSON.stringify(tasks)) 
  }

  if(method === 'POST' && url === '/tasks') {
    tasks.push({
      id: 1,
      title: 'Título da tarefa',
      description: 'exemplo de descrição',
      completed_at: null,
      created_at: new Date(),
      updated_at: new Date(),
    })
    return res.writeHead(201).end('criação de task')
  }

  return res.writeHead(404).end('Essa rota não existe!')
})

server.listen(3000)