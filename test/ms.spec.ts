import ms from '../src/ms';

const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;
const w = d * 7;
const y = d * 365.25;

describe('ms.ts', () => {
  test('100 should return 100', () => {
    expect(ms('100')).toBe(100);
  });

  test('2ms should return 2', () => {
    expect(ms('2ms')).toBe(2);
  });

  test('2s should return 2 * s', () => {
    expect(ms('2s')).toBe(2 * s);
  });

  test('2m should return 1 * m', () => {
    expect(ms('2m')).toBe(2 * m);
  });

  test('2h should return 2 * h', () => {
    expect(ms('2h')).toBe(2 * h);
  });

  test('2d should return 2 * d', () => {
    expect(ms('2d')).toBe(2 * d);
  });

  test('2w should return 2 * w', () => {
    expect(ms('2w')).toBe(2 * w);
  });

  test('1y should return 1 * y', () => {
    expect(ms('1y')).toBe(1 * y);
  });

  test('1mm should return 0', () => {
    expect(ms('1mm')).toBe(0);
  });

  test('1000000000000000000m should return 0', () => {
    expect(ms('1000000000000000000m')).toBe(0);
  });
});
