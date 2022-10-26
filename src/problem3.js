function solution(num) {
  cnt = 0
  for (let i = 0; i < String(num)[i]; i++) {
      if(String(num)[i] === '3' || String(num)[i] === '6' || String(num)[i] === '9') cnt++
  }
  return cnt
}

function problem3(number) {
  const arr = Array.from({ length: number }, (v, i) => i + 1);
  const answer = arr.map((num) => solution(num))
  
  return answer.reduce((acc, cur) => acc + cur, 0)
}

module.exports = problem3;
