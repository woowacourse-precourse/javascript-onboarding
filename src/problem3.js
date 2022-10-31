//정규식 사용, 문자열로 형변환 후 3,6,9 갯수만큼 +1
//위 task 1~number 까지 반복
function problem3(number){
  let answer=0;
  let numStr;
  const regex = new RegExp('[369]','g');
  for (let i=1; i<=number; i++){
    numStr = String(i).match(regex);
    answer += (numStr && numStr.length)
  }
  return answer;
}

module.exports = problem3;
