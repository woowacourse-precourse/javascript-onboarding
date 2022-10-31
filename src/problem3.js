function problem3(number) {
  let answer = 0;

  for(let i=1; i<=number; i++) {
    let str = changeToString(i);
    answer = answer + getClapCount(str);
  }

  return answer;
}

function changeToString(i) {
  const strI = String(i);
  return strI;
}

function getClapCount(str) {
  let clapCount = 0;

  for(let i=0; i<str.length; i++) {
    if(str[i] % 10 === 3 || str[i] % 10 === 6 || str[i] % 10 === 9) {
      clapCount++;
    }
  }

  return clapCount;
}

module.exports = problem3;
