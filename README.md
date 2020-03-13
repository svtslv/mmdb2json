# Mmdb2Json

<a href="https://www.npmjs.com/package/mmdb2json"><img src="https://img.shields.io/npm/v/mmdb2json.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/mmdb2json"><img src="https://img.shields.io/npm/l/mmdb2json.svg" alt="Package License" /></a>

## Table of Contents

- [Description](#description)
- [Command line](#command-line)
- [User in code](#use-in-code)
- [License](#license)

## Description
A simple code and command-line utils to convert mmdb to json

## Command line

#### Globally via `npm`

```bash
npm install --global mmdb2json
```

#### Running on-demand:

```bash
npx mmdb2json [options]
```

### Examples

```bash
npx mmdb2json --help
```

```bash
    'usage: mmdb2json [options]',
    '',
    'options:',
    '  --input      Path to .mmdb file [GeoLite2-City.mmdb]',
    '  --output     Path to .json file [GeoLite2-City.json]',
    '  --help       Print this list and exit',
    '  --version    Print the version and exit.',
    '',
```

## Use in code

### Installation

```bash
npm install mmdb2json
```

### Examples

```ts
  import { Mmdb2Json } from 'mmdb2json';

  const reader = Mmdb2Json.openSync(input);
  const result = reader.get();
```

## License

MIT
