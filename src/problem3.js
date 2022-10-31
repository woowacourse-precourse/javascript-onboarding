// 1부터 number까지 쳐야하는 손뼉 횟수 구하기
function problem3(number) {
  let clap_count = 0,
      claps;

  for (let num = 1; num <= number; num++) {
    claps = num.toString().match(/[369]/g);
    if (claps) clap_count += claps.length;
  }

  return clap_count;
}

module.exports = problem3;
