// 기능 목록
// 1. number까지 모든 숫자를 확인하면서 [3, 6, 9]가 들어있는지 판단하기
// 2. [3, 6, 9]가 들어있는 숫자에서 개수 판단하기 

function problem3(number) {
  const tsn = ['3', '6', '9'];

  let result = 0;
  for(let i=1; i<=number; i++) {
    let num = i.toString().split('');

    if(tsn.some(v => num.includes(v))) {
      result += num.filter(n => n === '3' || n === '6' || n === '9').length;
    }
  }

  return result;
}

module.exports = problem3;