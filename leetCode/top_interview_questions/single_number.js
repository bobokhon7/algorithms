////////
// bitwise operator

// AND // && // true if both values are true, otherwise false
// OR  // || // true if one of the both values are true, false if both are false

// XOR // if both values are same, result is 0 (false) and if they are not same, the result will be true

var _singleNumber = function (nums) {
  let result = 0;

  nums.forEach((item) => {
    result = result ^ item;
    console.log(result);
  });

  return result;
};

console.log(_singleNumber([4, 1, 2, 1, 2]));

//////////
var singleNumber = function (nums) {
  let newValue = nums.sort((a, b) => a - b);

  for (let i = 0; i < newValue.length; i += 2) {
    if (newValue[i] !== newValue[i + 1]) {
      return newValue[i];
    }
  }
};

/// Space compelxity O(n)
/// Time complexity  O(n)

// console.log(singleNumber([4, 1, 2, 1, 2]));

//// [1,1,2,2,4] => i +=2 so increased double

// 1 === 1
// 2 === 2
// return 4
