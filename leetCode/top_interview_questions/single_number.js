var singleNumber = function (nums) {
  let newValue = nums.sort((a, b) => a - b);

  for (let i = 0; i < newValue.length; i += 2) {
    if (newValue[i] !== newValue[i + 1]) {
      return newValue[i];
    }
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));

//// [1,1,2,2,4] => i +=2 so increased double

// 1 === 1
// 2 === 2
// return 4
