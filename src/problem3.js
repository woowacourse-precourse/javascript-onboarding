function problem3(number) {
  const clapStack = [];
  for(let i = 0; i <= number; i++) {
    if(countClapTimes(i) !== 0) {
      clapStack.push(countClapTimes(i))
    }
  }
  
  const answer = sumArrayNumber(clapStack);
  return answer;
}

module.exports = problem3;

const splitToNumberArray = (n) => String(n).split('').map(char => Number(char));
const countClapTimes = (n) => splitToNumberArray(n).filter(element => 3 === element || 6 === element || 9 === element).length
const sumArrayNumber = (array) => array.reduce((prev, cur) => {return prev + cur}, 0);

//problem 3 기능 목록
//[x] 주어진 숫자를 자릿수별로 분리된 배열로 변환하는 기능을 구현한다.
//[x] 주어진 배열에 포함된 3, 6, 9 의 갯수를 세는 기능을 구현한다.
//[x] 배열의 요소를 모두 합하는 기능을 구현한다.
//[x] for 반복문을 이용해 1부터 number까지 박수를 한 번이라도 쳐야 하는 숫자들의 박수 횟수를 array에 저장한다.
//[x] array에 저장된 값을 모두 더하여 answer로 하고, answer를 반환한다.