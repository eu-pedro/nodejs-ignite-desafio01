import http from 'node:http';
import { Json } from './middlewares/json.js';

const tasks = []

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await Json(req, res)

  if(method === 'GET' && url === '/tasks') {
    return res.end(JSON.stringify(tasks)) 
  }

  if(method === 'POST' && url === '/tasks') {
    const { title, description } = req.body
    tasks.push({
      id: 1,
      title,
      description,
      completed_at: null,
      created_at: new Date(),
      updated_at: new Date(),
    })
    return res.writeHead(201).end('criação de task')
  }

  return res.writeHead(404).end('Essa rota não existe!')
})

server.listen(3000)