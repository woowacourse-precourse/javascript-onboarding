function problem1(pobi, crong) {
  var answer;
  var pobiMax;
  var crongMax;

  if(pobi[0] < 1 || pobi[0] >= 400 || crong[0] < 1 || crong[0] >= 400){
    answer = -1;
  } else if (pobi[0] % 2 != 1 || crong[0] % 2 != 1) {
    answer = -1;
  } else if (pobi[1] != pobi[0] + 1 || crong[1] != crong[0] + 1) {
    answer = -1;
  } else {
    let pobiNums = [0,0];
    let crongNums = [0,0];
    let i = 10;

    for (let n = 0; n < 2; ++n) {
      let pobiSum = 0;
      let pobiMult = 1;

      pDigit = getDigit(pobi[n]);
      while (pDigit > 0) {
        let p = pobi[n] % i;
        pobiSum += p;
        pobiMult *= p;
        pobi[n] = (pobi[n] - p) / 10;
        pDigit--;
      }
      pobiNums[n] = Math.max(pobiSum, pobiMult);
    }

    for (let n = 0; n < 2; ++n) {
      let crongSum = 0;
      let crongMult = 1;

      cDigit = getDigit(crong[n]);
      while (cDigit > 0) {
        let c = crong[n] % i;
        crongSum += c;
        crongMult *= c;
        crong[n] = (crong[n] - c) / 10;
        cDigit--;
      }
      crongNums[n] = Math.max(crongSum, crongMult);
    }

    
  }
  return answer;
}

function getDigit(num) {
  num = num.toString();
  var i=0;
  while(num[i]) { i++; };
  return i;
}

module.exports = problem1;
