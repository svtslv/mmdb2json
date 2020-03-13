import { Reader } from 'maxmind';
import { Netmask, ip2long, long2ip } from 'netmask';

export { Netmask, ip2long, long2ip };

export class Mmdb2JsonReader<T> {
  reader: Reader<T>;

  constructor(buffer: Buffer) {
    this.reader = new Reader<T>(buffer);
  }

  all() {
    let ip = null;
    let mask = null;
    const result = [];
    const startIp = '0.0.0.0';
  
    while(ip !== startIp) {
      const netmask = new Netmask(`${ ip || startIp }/${ mask || 32}`);
      ip = long2ip(ip2long(netmask.last) + 2);
      const [info, nextMask] = this.reader.getWithPrefixLength(ip);
      mask = nextMask;
      result.push(info);
    }
  
    return result;
  }

  get() {
    const result = {};

    this.all().forEach(info => {
      if (info && info.city && info.city.geoname_id) {
        result[info.city.geoname_id] = info;
      }
    });

    return result;
  }
}