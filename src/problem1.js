function problem1(pobi, crong) {
  //예외처리
  //두 페이지가 연속된 페이지가 아닐경우 -1 리턴
  const check = (arr) => {
    if (arr[0] + 1 === arr[1]) return true
    else return false
  }

  if (!check(pobi)) return -1
  if (!check(crong)) return -1

  let answer
  let firstPobiSort
  let firstCrongSort

  //pobi의 페이지에서 각 페이지를 더한 값과, 곱한 값을
  //firstPobiSort로 반환
  firstPobiSort = pobi.map((i) => {
    return Math.max(
      (i + '')
        .split('')
        .map(Number)
        .reduce((a, b) => a + b, 0),
      (i + '')
        .split('')
        .map(Number)
        .reduce((a, b) => a * b, 1),
    )
  })

  //crong의 페이지에서 각 페이지를 더한 값과, 곱한 값을
  //firstCrongSort로 반환
  firstCrongSort = crong.map((i) => {
    return Math.max(
      (i + '')
        .split('')
        .map(Number)
        .reduce((a, b) => a + b, 0),
      (i + '')
        .split('')
        .map(Number)
        .reduce((a, b) => a * b, 1),
    )
  })

  //firstPobiSort 와 firstCrongSort에서 더한값과 곱한 값 중에 최댓값을
  //secondPobiSort 와 secondCrongSort에 할당
  let secondPobiSort = Math.max(...firstPobiSort)
  let secondCrongSort = Math.max(...firstCrongSort)

  //최종 비교
  if (secondPobiSort > secondCrongSort) {
    answer = 1
  } else if (secondPobiSort === secondCrongSort) {
    answer = 0
  } else {
    answer = 2
  }

  //console.log(answer)
  return answer
}

module.exports = problem1
