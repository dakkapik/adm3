// const fs = require('fs/promises');
const client = require("./emitter")

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let i

while(true) {
    client.write(i)
    i++
}