function problem3(number) {
  var answer = 0
  // 1. 1부터 숫자를 하나씩 카운트하는 기능
  for(let i=1; i<= number; i++){
    answer += clapHand(i)
  }
  return answer;
}
console.log(problem3(33))

module.exports = problem3;

// 369 게임 : 작동 목표
// 2. 숫자 개별로 하나하나 구별하는 기능.
function findNum(num){
  let splitValue = num.toString().split('').map(Number)

  return splitValue
}
console.log(findNum(13))
//3. 3,6,9가 들어간 숫자는 박수를 치는 기능.
function clapHand(num){
  let clap = 0
  num = findNum(num)
  for(let i in num){
    if(num[i] === 3 || num[i] === 6 || num[i] === 9) clap++;
  }
  return clap
}
  // console.log(clapHand(33))
// 4. 솔루션 매개변수에 숫자가 들어가면 1부터 넘버까지 손뼉을 몇번 처야 하는지?

/* 실행 예시
13 = 4 = 3,6,9,13
33 = 14 = 3,6,9, 13,16,19, 23,26,29, 30,31,32,[3,3]
*/