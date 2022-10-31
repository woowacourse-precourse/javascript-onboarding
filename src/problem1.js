function problem1(pobi, crong) {
  let answer;  
  let pobiSum, crongSum, pobiMulti, crongMulti;

  for(let i = 0; i < 2; i++) {
    pobiSum = pobi[i].toString().split('').reduce((x, y) => +x + +y, 0);
    crongSum = crong[i].toString().split('').reduce((x, y) => +x + +y, 0);
    pobiMulti = pobi[i].toString().split('').reduce((x, y) => +x * +y, 1);
    crongMulti = crong[i].toString().split('').reduce((x, y) => +x * +y, 1);
  }

  let pobiMax = Math.max(pobiSum, pobiMulti);
  let crongMax = Math.max(crongSum, crongMulti)

  if ( !(pobi[0] + 1 == pobi[1] && crong[0] + 1 == crong[1] && pobi[0] > 1 && pobi[0] < 400 && pobi[1] > 1 && pobi[1] < 400 && crong[0] > 1 && crong[0] < 400 && crong[1] > 1 && crong[1] < 400) ) return -1;

  if (pobiMax > crongMax) answer = 1;
  else if (pobiMax < crongMax) answer = 2;
  else if (pobiMax == crongMax) answer = 0;


  return answer;
}

module.exports = problem1;
