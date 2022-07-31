function practice_1(input) {
  return input.reduce((object, key) => {
    if (object[key]) object[key] += 1;
    else object[key] = 1;
    return object;
  }, {})

}

const input1 = ['a', 'b', 'c', 'a', 'c', 'a']
console.log('practice advanced 1');
console.log(practice_1(input1));