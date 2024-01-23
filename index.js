const http = require('http');


const server = http.createServer((req, res) => {
  res.end('Hello from Adegoke Sherif')
}) 

server.listen(8000, null, null, () => {
  console.log('server is running')
})