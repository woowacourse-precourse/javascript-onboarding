function problem3(number) {
  let answer = 0
  let current = 1
  //현재 확인하는 숫자가 current

  while (current <= number) {
    let arr = (current + '').split('').map(Number)
    //각 자릿수로 쪼개기

    for (let i of arr) {
      if (i === 3 || i === 6 || i === 9) {
        //모든 자릿수를 비교하며 3,6,9가 있다면 ++
        answer++
      }
    }

    current++
    //현재 확인하는 숫자를 +1
  }

  return answer
}

module.exports = problem3
