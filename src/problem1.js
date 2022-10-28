function problem1(pobi, crong) {
  var answer;
  let pobiNum = 0, crongNum = 0;
  if(pobi[0] + 1 != pobi[1] || crong[0] + 1 != crong[1]) return -1;
  for(pageNum of pobi) {
    let sum, mul, tempNum;
    let hundreds = (pageNum / 100) % 10;
    let tens = (pageNum / 10) % 10;
    let units = (pageNum / 1) % 10;
    if(hundreds != 0) {
      mul = hundreds * tens * units;
      sum = hundreds + tens + units;
    } else {
      if(tens != 0) {
        mul = tens * units;
        sum = tens + units;
      } else {
        mul = units;
        sum = units;
      }
    }
    tempNum = (sum > mul) ? sum : mul;
    pobiNum = (tempNum > pobiNum) ? tempNum : pobiNum;
  }
  for(pageNum of crong) {
    let sum, mul, tempNum;
    let hundreds = (pageNum / 100) % 10;
    let tens = (pageNum / 10) % 10;
    let units = (pageNum / 1) % 10;
    if(hundreds != 0) {
      mul = hundreds * tens * units;
      sum = hundreds + tens + units;
    } else {
      if(tens != 0) {
        mul = tens * units;
        sum = tens + units;
      } else {
        mul = units;
        sum = units;
      }
    }
    tempNum = (sum > mul) ? sum : mul;
    crongNum = (tempNum > crongNum) ? tempNum : crongNum;
  }
  answer = (pobiNum > crongNum) ? 1 : ((pobiNum = crongNum) ? 0 : 2);

  return answer;
}

module.exports = problem1;
