// const newNum = 32;

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    let binaryNum = N.toString(2); /// Convert to Binary Number
    let highestNum = 0;

    ////// Remove 0 from beginning and end of array and also remove 1  ==> ['', '00', '000', '] like this
    let removeOne = binaryNum
      .replace(/^0+/, "")
      .split("")
      .reverse()
      .join("")
      .replace(/^0+/, "")
      .split("1");

    //// find highest 0 length ex: 00 => length 2 and make equal to highest number and compare all other length of Zero
    for (let i = 0; i < removeOne.length; i++) {
      let findHighestNum = removeOne[i].length;
      if (findHighestNum > highestNum) {
        highestNum = findHighestNum;
      }
    }

    // return Higest Number
    return highestNum;
  }

  console.log("Result", solution(202));
