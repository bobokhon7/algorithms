var removeDuplicates = function (nums) {
  let counter = 1;
  let first = 0;
  let second = 0;
  while (first < nums.length - 1) {
    if (nums[first] !== nums[first + 1]) {
      nums[counter] = nums[first + 1];
      second = first;
      counter = counter + 1;
    }
    first = first + 1;
  }

  ///
  return counter;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
