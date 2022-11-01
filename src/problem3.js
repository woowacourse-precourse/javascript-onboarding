function cnt_clap(number) {
  let numStr = number.toString();
  let numArr = Array.from(numStr);
  let cnt = 0;
  for (let i = 0; i < numArr.length; i++){
     if(Number(numArr[i])%3 == 0 && Number(numArr[i]) != 0){
       cnt += 1;
     }
  }
  return cnt;  
}

function problem3(number) {
  var answer = 0;
  for (let i = 1; i <=number; i++){
      answer += cnt_clap(i);
  }
  return answer;
}

module.exports = problem3;
