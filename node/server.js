
function some(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}
function subtracion(a, b) {
  return a - b;
}

const HTTP = require('http');
const URL = require('url');
const PORT = 8000;


const SERVER = HTTP.createServer((req, res) => {
  const urlPassed = URL.parse(req.url, true);
  const {query, pathname} = urlPassed;
  console.log(query);
  console.log(pathname);
  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Simple calculator!</h1>');
  } else if (pathname === '/soma') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let a = parseInt(query.a);
    let b = parseInt(query.b);
    let valor = some(a, b);
    res.write(`<h1>${valor}</h1>`);
  } else if (pathname === '/multiplicacao') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let valor = multiply(query.a, query.b);
    res.write(`<h1>${valor}</h1>`);
  } else if (pathname === '/divisao') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let valor = division(query.a, query.b);
    res.write(`<h1>${valor}</h1>`);
  } else if (pathname === '/subtracao') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let valor = subtracion(query.a, query.b);
    res.write(`<h1>${valor}</h1>`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
