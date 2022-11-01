function problem3(number) {
  let threeSixNineCount = 0;
  for (currentNumber = 0; currentNumber < number; currentNumber++) {
    let arrOfDigits = Array.from(String(currentNumber+1), Number);
    for (const element of arrOfDigits) {
        if ((element == 3) || (element == 6) || (element == 9)) {
            threeSixNineCount++;
        }
    }
  }
  let answer = threeSixNineCount;
  return answer;
}

module.exports = problem3;
