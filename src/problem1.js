function problem1(pobi, crong) {
  if (isValidCase(pobi, crong) === false) return -1;
}

function isValidCase (case1, case2) {
  if (case1[1] - case1[0] !== 1 || case2[1] - case2[0] !== 1) return false
  if (case1[0] % 2 !== 1 || case2[0] % 2 !== 1) return false
  if (case1[1] % 2 !== 0 || case1[1] % 2 !== 0) return false
}

function pageMaxFinder(num) { 
  const splitNumber = (num) => {
    let strNumArr = num.toString().split("")
    return strNumArr.map((strNum) => Number(strNum)) 
  }
  const pageMax = (arr) => {
    let plus = arr.reduce((acc, cur) => acc + cur) 
    let times = arr.reduce((acc, cur) => acc * cur) 
    return Math.max(plus, times)
  }
  return pageMax(splitNumber(num))
}

module.exports = problem1;
