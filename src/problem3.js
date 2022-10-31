function getDigits(number) {
  const tenThousands = Math.floor(number / 10000);
  const thousands = Math.floor((number % 10000) / 1000);
  const hundreds = Math.floor(((number % 10000) % 1000) / 100);
  const tens = Math.floor((((number % 10000) % 1000) % 100) / 10);
  const units = (((number % 10000) % 1000) % 100) % 10;
  return [tenThousands, thousands, hundreds, tens, units];
}

function problem3(number) {
  if (number < 1 || number > 10000) return;
  let count = 0;
  for (let i = 1; i <= number; i++) {
    // number의 각 자릿수 얻기
    const digits = getDigits(i);

    // 각 자릿수가 몇 번 나왔는지 계산
    const digitsObj = digits.reduce((pre, cur) => {
      if (cur in pre) pre[cur]++;
      else pre[cur] = 1;

      return pre;
    }, {});

    // 박수 몇번 쳐야하는지 계산
    if (digitsObj[3]) {
      count += digitsObj[3];
    }
    if (digitsObj[6]) {
      count += digitsObj[6];
    }
    if (digitsObj[9]) {
      count += digitsObj[9];
    }
  }
  return count;
}

module.exports = problem3;
