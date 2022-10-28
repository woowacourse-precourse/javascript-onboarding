// 1부터 입력값(num)까지 숫자 생성
const createNum = (num) => {
  let answer = 0;
  for (let i = 1; i <= num; i++){
    let count = 0;
    const number = i.toString();
    
    // 3,6,9가 나올 때마다 숫자를 세는 기능 생성 (이중 for문)
    for (let j = 0; j < number.length; j++){
      if (number[j] === '3' || number[j] === '6' || number[j] === '9'){
        count++
      }
    }
    answer += count;
  }
  return answer;
}

function problem3(number) {
  return createNum(number);
}

module.exports = problem3;
