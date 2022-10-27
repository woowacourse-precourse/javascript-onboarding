const isToClap = (digit) => digit === '3' || digit === '6' || digit === '9';

function getClapNumber(number) {
  const digits = number.toString().split('');
  const clapNumbers = digits.filter((digit) => isToClap(digit));

  return clapNumbers.length;
}

function problem3(number) {
  var answer;
  return answer;
}

module.exports = problem3;

function test() {
  console.log(getClapNumber(33));
  console.log(getClapNumber(13));
  console.log(getClapNumber(3319));
  console.log(getClapNumber(4));
}

test();
