function units(num) {
  let unitClap = (Math.floor(num / 3));
  return unitClap;
}

function tens(num) {
  let tensClap = (Math.floor(num / 3) * 10);
  tensClap += (num * 3);
  return tensClap;
}

function hundreds(num) {
  let hundredsClap = (Math.floor(num / 3) * 100);
  hundredsClap += (num * 57);
  return hundredsClap;
}

function thousands(num) {
  let thousandsClap = (Math.floor(num / 3) * 1000);
  thousandsClap += (num * 813);
  return thousandsClap;
}

function switching(digit, num) {
  switch(digit) {
    case 1:
      return units(num);
    case 2:
      return tens(num);
    case 3:
      return hundreds(num);
    case 4:
      return thousands(num);
  }
}

function countClaps(num) {
  let clapCount = 0;
  for (let digit = 1; num > 0; num = Math.floor(num / 10) && digit++) {
    clapCount += switching(digit, num % 10);
  }
  return clapCount;
}

function problem3(number) {
  let answer = countClaps(number);
  return answer;
}

// module.exports = problem3;