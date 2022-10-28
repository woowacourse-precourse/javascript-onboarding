function problem3(number) {
  let answer = 0;
  for (let i = 1; i<=number; i++){
    let str = i.toString()
    if (str.includes(3) || str.includes(6) || str.includes(9)){
      answer += 1
    }
  }
  return answer;
}

module.exports = problem3;
