const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;
const w = d * 7;
const y = d * 365.25;

const reg = /^(-?(?:\d+)?\.?\d+)(ms|s|m|h|d|w|y)?$/;
// debugger;
export default function ms(time: string) {
  if (time.length > 15) return 0;
  const match = reg.exec(time);

  if (!match) return 0;

  const n = Number.parseFloat(match[1]);

  const type = (match[2] || 'ms').toLowerCase();

  switch (type) {
    case 'y':
      return n * y;
    case 'w':
      return n * w;
    case 'd':
      return n * d;
    case 'h':
      return n * h;
    case 'm':
      return n * m;
    case 's':
      return n * s;
    case 'ms':
      return n;
  }
}
