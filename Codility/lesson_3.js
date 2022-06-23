// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
    ////// Find  How many steps Frog should take and we should paresInt() ex: 2.5 > parseInt(2.5) = 2.5
    let countJumps = parseInt((Y - X) / D);

    //if remainder greather than 0 increase one countJumps
    if ((Y - X) % D > 0) {
      countJumps++;
    }
    return countJumps;
  }

  console.log(solution(10, 85, 30));
