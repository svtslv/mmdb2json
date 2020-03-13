#!/usr/bin/env node

import * as fs from 'fs';
import { join, basename } from 'path';
import * as chalk from 'chalk';
import * as figlet from 'figlet';
import { argv } from 'optimist';
import { Mmdb2Json } from './mmdb2json.lib';

console.log(chalk.green(figlet.textSync('mmdb2json', { horizontalLayout: 'full' })));
console.log(chalk.green(`Homepage: ${ require('../package.json').homepage }`));
console.log(chalk.green(`Run with --help to print help\n`));

if (argv.help) {
  console.log([
    'usage: mmdb2json [options]',
    '',
    'options:',
    '  --input      Path to .mmdb file [GeoLite2-City.mmdb]',
    '  --output     Path to .json file [GeoLite2-City.json]',
    '  --help       Print this list and exit',
    '  --version    Print the version and exit.',
    '',
  ].join('\n'));
  process.exit();
}

if (argv.version) {
  console.log('Version: ' + require('../package.json').version, '\n');
  process.exit();
}

const input = argv.input || join(process.cwd(), 'GeoLite2-City.mmdb');
const output = argv.output || join(process.cwd(), basename(input) || 'GeoLite2-City.json');

// 'node_modules/geolite2/dbs/GeoLite2-City.mmdb'
console.log('Wait...');
try {
  console.time();
  const reader = Mmdb2Json.openSync(input);
  const result = reader.get();
  
  console.log(output);
  fs.writeFileSync(output, JSON.stringify(result));
  console.log(`File was saved with`, Object.keys(result).length, 'items');
} catch(e) {
  console.log(e.message);
}