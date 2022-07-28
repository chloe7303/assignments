function calculate(args) {
  let operator = args.op;
  let result = 0;
  if (operator === '+') {
    result = args.n1 + args.n2;
  } else if (operator === '-') {
    result = args.n1 - args.n2;
  } else {
    result = 'Not supported.'
  }
  return result;
}

console.log('practice 2');
console.log(calculate({ n1: 2, n2: 3, op: '+' }));
console.log(calculate({ n1: 5, n2: 2, op: '-' }));
console.log(calculate({ n1: 1, n2: 6, op: 'x' }));
