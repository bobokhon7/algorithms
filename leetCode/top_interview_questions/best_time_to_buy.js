var maxProfit = function (prices) {
  //
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
};

///1  =>  n tomom
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// i=1
// prices[1] => 1    [7, 1, 5, 3, 6, 4]
// prices[1-1] => 7  [7, 1, 5, 3, 6, 4]

// Boolean
// if 1>7  skipp

// i=2
// prices[2] => 5    [7, 1, 5, 3, 6, 4]
// prices[2-1] => 1  [7, 1, 5, 3, 6, 4]

// Boolean
// if 5>1  so true
// increase value  profit += 5 - 1
