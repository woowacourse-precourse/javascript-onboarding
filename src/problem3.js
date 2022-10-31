function problem3(number) {
  const check = (number) => {
    if (number < 1 || 10000 < number) return false;
    return true;
  }

  function countClap(number) {
    let answer = 0

    for (let i = 1; i <= number; i++) {
      let count = 0
      const num = i.toString()
      for (let j = 0; j < num.length; j++) {
        if (num[j] === "3" || num[j] === "6" || num[j] === "9") count++
      }
      answer += count
    }
    return answer;
  }
  
  let result = countClap(number)

  if (!check(number)) { throw Error("1이상 10,000이하 자연수를 입력해주세요.") }
  else return result;
}

module.exports = problem3;