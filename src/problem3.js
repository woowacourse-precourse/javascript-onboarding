// 포함되는 수를 지정해주기 위한 상수
const CLAP_INCLUDE_NUMBERS = [3, 6, 9];

// 1부터 number까지 손뼉을 치는 횟수 구하기
function problem3(number) {
  let clapCnt = 0;
  let numArr;
  for(let i = 1; i<=number; i++) {
    numArr = String(i).split('').map(x=>+x);
    numArr.map(x => {
      if(CLAP_INCLUDE_NUMBERS.includes(x)) clapCnt++;
    })
  }
  return clapCnt;
}

module.exports = problem3;
