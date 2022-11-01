function problem1(pobi, crong) {
  var answer;
  let pobiNumber = 0,
    crongNumber = 0;
  // 예외상황 체크
  if (pobi[0] + 1 != pobi[1] || crong[0] + 1 != crong[1]) return -1;
  for (pageNumber of pobi) {
    let sum = 0,
      mul = 1,
      result;
    let hundreds = 0,
      tens = 0,
      digits = 0; //백의 자리, 십의 자리, 일의 자리
    hundreds = (pageNumber / 100) % 10;
    tens = (pageNumber / 10) % 10;
    digits = (pageNumber / 1) % 10;

    if (hundreds != 0) {
      sum = hundreds + tens + digits;
      mul = hundreds * tens * digits;
    } else {
      if (tens != 0) {
        sum = tens + digits;
        mul = tens * digits;
      } else {
        sum = digits;
        mul = digits;
      }
    }
    result = sum > mul ? sum : mul;
    pobiNumber = result > pobiNumber ? result : pobiNumber;
  }

  for (pageNumber of crong) {
    let sum = 0,
      mul = 1,
      result;
    let hundreds = 0,
      tens = 0,
      digits = 0; //백의 자리, 십의 자리, 일의 자리
    hundreds = (pageNumber / 100) % 10;
    tens = (pageNumber / 10) % 10;
    digits = (pageNumber / 1) % 10;

    if (hundreds != 0) {
      sum = hundreds + tens + digits;
      mul = hundreds * tens * digits;
    } else {
      if (tens != 0) {
        sum = tens + digits;
        mul = tens * digits;
      } else {
        sum = digits;
        mul = digits;
      }
    }
    result = sum > mul ? sum : mul;
    crongNumber = result > crongNumber ? result : crongNumber;
  }

  console.log(pobiNumber, crongNumber);
  answer = pobiNumber > crongNumber ? 1 : (pobiNumber = crongNumber) ? 0 : 2;

  return answer;
}

module.exports = problem1;
