function problem1(pobi, crong) {
  var answer;
  var pobiNum;
  var crongNum;

  if ((pobi.length === 2) && (pobi[1] - pobi[0] === 1) && (pobi[0] % 2 === 1)) {
    for (var i = 0; i < pobi.length; i++) {
      var pobiSum = 0;
      var pobiTimes = 1;
  
      while (pobi[i] > 0) {
        pobiSum += pobi[i] % 10;
        pobiTimes *= pobi[i] % 10;
        pobi[i] = Math.floor(pobi[i] / 10);
      }
    }
  }

  if ((crong.length === 2) && (crong[1] - crong[0] === 1) && (crong[0] % 2 === 1)) {
    for (var i = 0; i < crong.length; i++) {
      var crongSum = 0;
      var crongTimes = 1;

      while (crong[i] > 0) {
        crongSum += crong[i] % 10;
        crongTimes *= crong[i] % 10;
        crong[i] = Math.floor(crong[i] / 10);
      }
    }
  }

  pobiNum = Math.max(pobiSum, pobiTimes)
  crongNum = Math.max(crongSum, crongTimes)

  answer = (pobiNum > crongNum) ? 1 :
    (pobiNum < crongNum) ? 2 : 
    (pobiNum === crongNum) ? 0 :
    -1;

  return answer;
}

module.exports = problem1;
