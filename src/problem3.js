function problem3(number){
  let answer=0;
  let numStr;
  const regex = new RegExp('[369]','g');
  for (let i=1; i<=number; i++){
    numStr = String(i).match(regex);
    answer += (numStr && numStr.length);
  }
  return answer;
}

module.exports = problem3;
