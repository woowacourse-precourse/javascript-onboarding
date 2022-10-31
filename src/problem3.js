function problem3(number) {
  var answer =0;
for(i=0; i<=number; i++)
{
  answer += (String(i).match(/[3|6|9]/g)||[]).length;
}
return answer;
}

module.exports = problem3;
