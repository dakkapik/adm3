const net = require('node:net');
const setting = require("../../settings.json")

const client = net.createConnection({ 
    port: setting.port,
    host: setting.host 
  }, () => {
  // 'connect' listener.
  console.log('connected to server!');
  client.write('world!\r\n');
});

client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});

client.on('end', () => {
  console.log('disconnected from server');
});

module.exports = client