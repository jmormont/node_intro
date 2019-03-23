const http = require('http')
const fs = require('fs')


var server = http.createServer((req, res) => {
  res.setHeader('content-type', 'text/html; charset=utf-8')
  if (req.url === '/') {
    res.write('<html><head><title>Привет друг!</title></head>')
    res.write('<body><h1>Привет!</h1></body></html>')
    return res.end()
  }
  
  if (req.url === '/message' && req.method === 'GET') {
    res.write('<body><form action="/message" method="POST"><input type="text" name="message" /><input type="submit" value="Нажми" /></form></body>')
    return res.end()
  }
  if (req.url === '/message' && req.method === 'POST') {
    let message = ''
    req.on('data', (chunk) => {
      message += chunk.toString()
    })
    req.on('end', (error) => {
      let messageValue = message.split('=')[1]
      fs.writeFileSync('message.txt', messageValue)
      res.setHeader('Location', '/')
      res.statusCode = 302
      return res.end()
    })
  }
})



server.listen(3000)