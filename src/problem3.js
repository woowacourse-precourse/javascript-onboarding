function problem3(number) {
  let answer = 0;
  for(let i=1; i<=number; i++) {
    let clapCount = i.toString().match(/[3|6|9]/g);
    if(clapCount) answer+= clapCount.length;
  }
  return answer;
}

module.exports = problem3;
