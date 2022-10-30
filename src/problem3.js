//문제 3번 기능 목록
//1. 1부터 입력값까지 반복문 순회
//2. 범위 내의 숫자에 대해 박수 몇 번 치는지 카운트하기
function countClap (num){
  const tmp = (num).toString();
  //console.log(tmp);
  var countSum = 0;
  for (var i = 0; i < tmp.length; i++) {
      if (tmp[i]==3 || tmp[i] == 6 || tmp[i] == 9){
        countSum += 1
      }
  }
  return countSum;
}

function problem3(number) {
  var answer;
  var clapSum = 0;
  for (i=1; i<=number; i++){
    clapSum += countClap(i);
    //console.log(i,"에서 박수 몇번? :", clapSum);
  }
  answer = clapSum;
  return answer;
}
//console.log(problem3(33));

module.exports = problem3;
