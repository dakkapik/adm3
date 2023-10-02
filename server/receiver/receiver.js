const net = require("net")
const settings = require("../../settings.json")

const controller = new AbortController();

const server = net.createServer((socket) => {
    socket.on("data", (data)=> {
        console.log(data.toString())
    })
    // socket.end('goodbye\n');
}).on('error', (err) => {
    // Handle errors here.
    throw err;
});

server.listen({
  host: settings.host,
  port: settings.port,
  signal: controller.signal,
}, ()=> console.log('opened server on', server.address()));

// Later, when you want to close the server.
controller.abort();

module.exports = server;