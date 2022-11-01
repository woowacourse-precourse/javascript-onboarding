/*
[기능목록]
1부터 입력값까지 3, 6, 9가 몇번 들어가는지 확인
3, 6, 9가 일의 자리 외에서 나오는 것도 모두 카운트
*/


function countSpecialNumber(number){
  let count = 0;
  for(let i = 1; i <= number; i++){
    temp = String(i)
    for(let j = 0; j < temp.length; j++){
        if(temp[j] === '3' || temp[j] === '6' || temp[j] === '9'){
          count += 1
        }
    }
  }
  return count;
}


function problem3(number) {
  let answer = countSpecialNumber(number);
  return answer;
}

problem3(33) // 13 -> 4, 33 -> 14
module.exports = problem3;
