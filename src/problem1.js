function problem1(pobi, crong) {
  var answer;

  if(pobi[0] + 1 != pobi[1] || crong[0] + 1 != crong[1]) return -1;

  let pobiLeft = String(pobi[0]).split("");
  let pobiRight = String(pobi[1]).split("");
  let crongLeft = String(crong[0]).split("");
  let crongRight = String(crong[1]).split("");

  function pageSum(arr) {
    let sum = 0;

    for(let i=0; i<arr.length; i++) {
      sum += Number(arr[i]);
    }

    return sum;
  }

  function pageMulti(arr) {
    let multi = 1;

    for(let i=0; i<arr.length; i++) {
      multi *= arr[i];
    }

    return multi;
  }

  let pobiNum = [pageSum(pobiLeft), pageSum(pobiRight), pageMulti(pobiLeft), pageMulti(pobiRight)];
  pobiNum.sort(function(a,b) {return b-a;});
  let crongNum = [pageSum(crongLeft), pageSum(crongRight), pageMulti(crongLeft), pageMulti(crongRight)];
  crongNum.sort(function(a,b) {return b-a;});

  if(pobiNum[0] > crongNum[0]) {
    answer = 1;
  } else if(pobiNum[0] < crongNum[0]) {
    answer = 2;
  } else if(pobiNum[0] == crongNum[0]) {
    answer = 0;
  } else {
    answer = -1;
  }

  return answer;
}

module.exports = problem1;
