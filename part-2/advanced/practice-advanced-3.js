function practice_3(input) {
  return input.reduce((object, item) => {
    if (object[item.key]) object[item.key] = [...object[item.key], item.value]
    else object[item.key] = [item.value]
    return object;
  }, {})
}

const input3 = [
  { key: 'a', value: 3 },
  { key: 'b', value: 1 },
  { key: 'c', value: 2 },
  { key: 'a', value: 3 },
  { key: 'c', value: 5 },
]

console.log('practice advanced 3');
console.log(practice_3(input3));
