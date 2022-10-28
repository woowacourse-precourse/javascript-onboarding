function problem3(number) {
  let answer = 0;
  for (let i = 1; i<=number; i++){
    let str = i.toString()
    for (let j = 0; j<str.length; j++){
      if (str[j].includes(3) || str[j].includes(6) || str[j].includes(9)){
      answer += 1
      }
    }
  }
  return answer;
}

module.exports = problem3;
