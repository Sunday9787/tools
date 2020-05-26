/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const readline = require('readline');

// const file = fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8');

const rl = readline.createInterface({
  input: fs.createReadStream(path.resolve(__dirname, '../src/index.ts')),
});

let i = 0;
rl.on('line', function(line) {
  console.log('Line from file:' + i + ':' + line);
  if (i == 1) {
    console.log(line);
  }
  i += 1;
});
