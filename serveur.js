// Importer le module http de Node.js
const http = require('http');
// Créer un serveur
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello Node !!!!</h1>\n');
});
// Le serveur écoute sur le port 3000
server.listen(3000, () => {
  console.log('Le serveur a demaré sur  http://localhost:3000');
});