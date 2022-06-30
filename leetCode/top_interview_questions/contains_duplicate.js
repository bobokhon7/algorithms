var containsDuplicate = function (nums) {
  let newValue = nums.sort((a, b) => a - b);
  //   for (let i = 0; i < newValue.length; i++) {
  //     if (newValue[i] === newValue[i + 1]) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  return newValue;
};

console.log(containsDuplicate([2, 3, 2, 1]));
