const str = 'aaaababbbbbcaccccc';

let result = '';
let current = str.charAt(0);
let currentNum = 1;

for (let i = 1; i < str.length; i++) {
  if (str.charAt(i) === current) {
    currentNum += 1;
  } else {
    result += current + String(currentNum);
    current = str.charAt(i);
    currentNum = 1;
  }
}

result += current + String(currentNum);
console.log(result);

console.log(str.replace(/(.)\1*/g, (m, v) => `${v}${m.length}`));
