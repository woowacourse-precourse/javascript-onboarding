function problem1(pobi, crong) {
  let answer;

  const check = (arr) => {
    if (arr.length !== 2) return false;
    if (arr[0] + 1 !== arr[1]) return false;
    if (arr[0] % 2 === 0) return false;
    if (arr[0] <= 1) return false;
    if (arr[1] >= 400) return false;
    return true;
  }
  if (!check(pobi) || !check(crong)) return answer = -1
  
  return answer;
}

module.exports = problem1;
