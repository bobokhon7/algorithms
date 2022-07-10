var intersect = function (nums1, nums2) {
  const counter1 = {};
  const counter2 = {};

  nums1.forEach((item) => {
    if (counter1[item]) counter1[item] = counter1[item] + 1;
    else counter1[item] = 1;
  });

  nums2.forEach((item) => {
    if (counter2[item]) counter2[item] = counter2[item] + 1;
    else counter2[item] = 1;
  });

  result = [];

  for (let item in counter1) {
    if (counter2[item]) {
      let min =
        counter1[item] < counter2[item] ? counter1[item] : counter2[item];

      for (let x = 0; x < min; x++) {
        result.push(parseInt(item));
      }
    }
  }

  return result;
};

// console.log(intersect([9, 4, 9, 8, 4], [4, 9, 5]));

//////////////////////////////////

var intersect2 = function (nums1, nums2) {
  nums1.sort();
  nums2.sort();
  const result = [];

  let p1 = 0,
    p2 = 0;

  while (p1 < nums1.length) {
    if (nums1[p1] === nums2[p2]) {
      result.push(nums1[p1]);
      p1 += 1;
      p2 += 1;
    } else {
      if (nums1[p1] === nums1[p1 - 1] || nums1[p1] !== nums2[p2]) {
        p1 += 1;
      }
      if (nums2[p2] === nums2[p2 - 1]) {
        p2 += 1;
      }
    }
  }

  return result;
};

console.log(intersect2([1, 2, 2, 1], [2, 2]));

///[4,4,5,9,9]
///[4,5,9]

// [1,2,2,1]
// [2,2]
