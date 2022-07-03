var containsDuplicate = function (nums) {
  let newValue = nums.sort((a, b) => a - b);

  for (let i = 0; i < newValue.length - 1; i++) {
    if (newValue[i] === newValue[i + 1]) {
      return true;
    }
  }
  return false;
};

/// Space compelxity O(n)
/// Time complexity  O(n)

var _containsDuplicate = function (nums) {
  const set_array = new Set(nums);

  return nums.length === set_array.size;
};

console.log(_containsDuplicate([1, 2, 3, 4]));

///[1,2,2,3,3,4]
// 1===2 => false
// 2===2 => true

//// [1,2,3,3,]
// 1===2 => false
// 2===3 => false
// 3 === 3 => true

/////  [3,3]
// 3 === 3 => true
