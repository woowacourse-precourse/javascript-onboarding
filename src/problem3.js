
class Clap {
  constructor(N) {
    this.input = N;
    let clapLog = [];
    for (let i = 0; i < N; i++) {
      let n = i + 1;
      let s = [...String(n)];
      let arr3 = s.filter(x => x === '3');
      let arr6 = s.filter(x => x === '6');
      let arr9 = s.filter(x => x === '9');
      let clap = arr3.length + arr6.length + arr9.length;
      clapLog.push(clap)
    }
    this.log = clapLog;
    let clapNum = clapLog.reduce((x, y) => x + y);
    this.clapNum = clapNum;
  }

  get valid() {
    if (this.input >= 1 && this.input <= 10000) {
      return true
    }
    else {
      return false
    }
  }
}

function problem3(number) {
  var answer;
  const clapInfo = new Clap(number);
  // console.log(clapInfo)

  if (clapInfo.valid) {
    answer = clapInfo.clapNum;
  }
  else {
    // alert('invalid input');
    answer = 'invalid input';
  }
  return answer;
}

module.exports = problem3;
