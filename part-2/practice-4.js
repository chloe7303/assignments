function twoSum(nums, target) {
  let indexArray = [];
  nums.forEach((currentNum, currentIndex, array) => {
    // console.log(total, currentnum);
    let theOtherNumber = target - currentNum;
    if (array.includes(theOtherNumber)) indexArray.push(currentIndex);
  })
  return indexArray;
}

console.log('practice 4');
console.log(twoSum([2, 7, 11, 15], 9));