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
    let n = Number(str[i]);
    if(n % 10 === 3 || n % 10 === 6 || n % 10 === 9) {
      clapCount++;
    }
  }

  return clapCount;
}

module.exports = problem3;
