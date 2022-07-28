function max(numbers) {
  let maxNumber = -Infinity;
  numbers.forEach(number => {
    if (number > maxNumber) maxNumber = number;
  });
  return maxNumber;
}

console.log('practice 1');
console.log(max([1, 2, 4, 5]));
console.log(max([5, 2, 7, 1, 6]));
