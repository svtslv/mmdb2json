import * as fs from 'fs';
import { Mmdb2JsonReader } from './mmdb2json.reader';

export class Mmdb2Json {
  static async open<T>(path: string) {
    const buffer = await fs.promises.readFile(path);
    return new Mmdb2JsonReader<T>(buffer);
  }

  static openSync<T>(path: string) {
    const buffer = fs.readFileSync(path);
    return new Mmdb2JsonReader<T>(buffer);
  }
}