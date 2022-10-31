function problem3(number) {
  let answer = gameMatcher(number);
  return answer;
}

function gameMatcher(number){
  let result = 0;
  const condition = /[3|6|9]/;
  for (let i =1; i<=number; i ++)
    result+= [...i.toString().matchAll(condition)].length;
  return result;
}

module.exports = problem3;
