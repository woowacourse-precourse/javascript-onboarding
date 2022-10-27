// 1부터 number까지 쳐야하는 손뼉 횟수 구하기
function problem3(number) {
  let clap = 0;
  for (let num = 1; num <= number; num++) {
    for (let n of num.toString()) {
      if (n === '3' || n === '6' || n === '9') clap++;
    }
  }
  return clap;
}

module.exports = problem3;
