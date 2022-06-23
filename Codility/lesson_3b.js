// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    if (A.length === 0) {
      return 1;
    }
    /////// sort array => [ 1, 2, 3, 5 ]
    let sortArr = A.sort((a, b) => a - b);

    //////////check with index number equal skipped, if it not equal indec number with array[i] return that number
    for (let i = 0; i < sortArr.length; i++) {
      if (sortArr[i] !== i + 1) {
        return i + 1;
      }
    }
  }

  console.log(solution([2, 3, 1, 5]));
