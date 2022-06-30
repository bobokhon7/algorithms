var containsDuplicate = function (nums) {
  let newValue = nums.sort((a, b) => a - b);

  for (let i = 0; i < newValue.length; i++) {
    if (newValue[i - 1] === newValue[i]) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([3, 3]));
