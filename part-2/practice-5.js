function delayedResult(n1, n2, delayTime, callback) {
  const output = n1 + n2;
  window.setTimeout(callback.bind(null, output), delayTime);
}

console.log('practice 5');

delayedResult(4, 5, 3000, function (result) {
  console.log(result);
});

delayedResult(-5, 10, 2000, function (result) {
  window.alert(result);
});
