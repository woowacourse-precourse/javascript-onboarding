function problem3(number) {
  // 특정 한 숫자에 쳐야하는 손뼉 횟수
  function numberOfClap(num) {
    let clap = 0
    for (char of String(num)) {
      if (['3', '6', '9'].includes(char)) {
        clap += 1
      }
    }
    return clap
  }

  // 1부터 number까지 손뼉 친 횟수
  let totCnt = 0
  for (let num = 1; num <= number; num++) {
    totCnt += numberOfClap(num)
  }

  return totCnt
}

// console.log('3' in ['3', '6', '9'])
// console.log(['3', '6', '9'].includes('3'))

module.exports = problem3;
