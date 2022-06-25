var rotate = function (nums, k) {
  const result = [];
  const array_l = nums.length;

  for (let i = 0; i < array_l; i++) {
    let new_index = (i + k) % array_l;
    result[new_index] = nums[i];
  }

  ////// should make old array to new array because of extra space
  for (let i = 0; i < array_l; i++) {
    nums[i] = result[i];
  }
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
// [1, 2, 3, 4, 5, 6, 7]
// [1, 2, 3, 4, 5, 6, 7]
// [5, 6, 7, 1, 2, 3, 4]

// 1: 0 -> 4
// 5: 4 -> 0   // (old_index + k) % nums.length
// 6: 5 -> 1
// 7: 6 -> 2
//    9 -> 2

// ----------- new explanation ---
// [1, 2, 3, 4, 1, 2, 3]
// [4, 5, 6, 1, 2, 3, 7]
