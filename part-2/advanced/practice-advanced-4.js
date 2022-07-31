function practice_4(input) {
  return input.reduce((object, item) => {
    if (object[item.key]) object[item.key] += item.value
    else object[item.key] = item.value
    return object;
  }, {})
}

const input4 = [
  { key: 'a', value: 3 },
  { key: 'b', value: 1 },
  { key: 'c', value: 2 },
  { key: 'a', value: 3 },
  { key: 'c', value: 5 },
]

console.log('practice advanced 4');
console.log(practice_4(input4));
