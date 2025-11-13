
const obj={name:"Chandu", age:30,show: function() {
    console.log(this.name); //When called as a method (obj.show()), this refers to the object before the dot.
  }
};
obj.show(); 
obj.age=31; //allowed
console.log(obj); 

//const http = require('node:http');

// server.mjs

import { createServer } from 'node:http';
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// run with `node server.mjs`

// tests.mjs
import assert from 'node:assert';
import test from 'node:test';

test('that 1 is equal 1', () => {
  assert.strictEqual(1, 1);
});

test('that throws as 1 is not equal 2', () => {
  // throws an exception because 1 != 2
  assert.strictEqual(1, 2);
});

// run with `node tests.mjs`

