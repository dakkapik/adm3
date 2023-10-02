// const fs = require('fs/promises');
const client = require("./emitter")

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`What's your name?`, name => {
    client.write(name)
    // console.log(`Hi ${name}!`);
    readline.close();
});