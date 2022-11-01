function problem3(number) {
  var answer =0;
for(i=0; i<=number; i++)
{
  answer += (String(i).match(/[3|6|9]/g)||[]).length;//정규식을 이용해 3,6,9가 포함된 숫자들의 횟수만큼 asnwer에 덧샘
}
return answer;
}

module.exports = problem3;