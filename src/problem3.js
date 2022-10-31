// 포함되는 수를 지정해주기 위한 상수
const CLAP_INCLUDE_NUMBERS = [3, 6, 9];

// 1부터 number까지 손뼉을 치는 횟수 구하기
function problem3(number) {
  let clapCnt = 0;
  let numArr;
  // 1부터 number까지 순회
  for(let i = 1; i<=number; i++) {
    numArr = String(i).split('').map(x=>+x);
    // 각 자리수를 배열로 만든 원소를 순회하며 3, 6, 9를 포함할 때마다 갯수 합산
    numArr.map(x => {
      if(CLAP_INCLUDE_NUMBERS.includes(x)) clapCnt++;
    })
  }
  return clapCnt;
}

module.exports = problem3;
