#!/usr/bin/env node
const fs = require('fs');
const readline = require('readline');

function toJson(data) {
  const parser = xml2js.Parser();

  return parser.parseString(data);
}

// if ends with />, skip

function main() {
  const [, , filepath] = process.argv;
  let object = {};

  fs.readFile(filepath, 'utf8', function (err, data) {
    if (err) {
      console.error(err);
      return;
    }
    object = toJson(data);
    console.log(object);
  });
}

main();
