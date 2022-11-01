/* 
기능 목록
1. 숫자를 하나씩 잘라서 배열에 담기 
2. 배열에 3,6,9가 들어있으면 answer 증가
*/

function problem3(number) {
  let answer = 0;

  for(let i=1; i<=number;i++) {
    let arr = String(i).split("");
    for(let j=0; j<arr.length; j++) {
      if(arr[j] === "3" || arr[j] === "6" || arr[j] === "9") {
        answer++;
      }
    }
  }
  return answer;
}

module.exports = problem3;
