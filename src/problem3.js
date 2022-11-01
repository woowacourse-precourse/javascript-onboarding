function problem3(number) {
  let answer = gameMatcher(number);
  return answer;
}

// Match the number with the game
function gameMatcher(number){
  let result = 0;
  const condition = /3|6|9/g;
  for (let i =1; i<=number; i ++)
    result+= [...i.toString().matchAll(condition)]?.length||0;
  return result;
}

module.exports = problem3;
