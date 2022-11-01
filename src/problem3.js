function problem3(number) {
  if (1 > number || number > 10000)
    return 'number는 1 이상 10,000 이하인 자연수이다.';
  var answer = 0;
  for (let i = 1; i <= number; i++) {
    let num = `${i}`;
    if (num.includes('3') || num.includes('6') || num.includes('9')) {
      while (num.length > 0) {
        let last = num.length - 1;
        if (num[last] === '3' || num[last] === '6' || num[last] === '9') {
          answer++;
        }
        num = num.slice(0, num.length - 1);
      }
    }
  }
  return answer;
}

module.exports = problem3;
