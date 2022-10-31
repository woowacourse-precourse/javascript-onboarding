function problem3(number) {

  // 횟수를 담아줄 변수 선언
  let result = 0;

  // 입력 받은 number의 1부터 number까지를 배열로 나열 
  let arr = Array(number).fill().map((v, i) => i + 1).join('').split('');
  
  // 해당 배열에 3, 6, 9가 들어있을 경우 result의 수를 하나씩 올림
  for(const el of arr) {
    if(el === '3' || el === '6'|| el === '9') result++;
  }

  // 횟수에 대한 최종 결괏값 리턴
  return result;
}

module.exports = problem3;
