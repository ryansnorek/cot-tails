import getDeviation from "./getDeviation";

export default function markFilter(current, metric, deviation) {
    let dev = getDeviation(current, metric);
    dev = parseFloat(dev.slice(0, dev.length - 2));
    let filter = false;
    if (dev > 0 && dev >= deviation) {
      filter = true;
    } else if (dev < 0 && dev <= -deviation) {
      filter = true;
    }
    return filter;
  }