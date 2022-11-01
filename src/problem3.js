function problem3(number) {
  if(number<1||number>10000) throw Error('숫자가 범위를 벗어났습니다.');

  let clap = 0;
  for(let currentNum=1; currentNum<=number; currentNum++) {
    currentNum.toString().split("").forEach((item) => {
      if(item==3||item==6||item==9) {
        clap++;
      }
    })
  }
  return clap;
}

module.exports = problem3;