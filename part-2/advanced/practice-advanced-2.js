function practice_2(input, mapping) {
  return input.map(item => mapping[item]);
}

const arr = ['a', 'b', 'c', 'a', 'b']
const mapping = {
  a: 1,
  b: 2,
  c: 3
}

console.log('practice advanced 2');
console.log(practice_2(arr, mapping));
