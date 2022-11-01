function problem1(pobi, crong) {
  var result = "";
  let finalCal = [];
  function cal(a) {
    let maxNum = [];
    if (a[0] + 1 !== a[1]) {
      maxNum.push(0);
      return maxNum;
    } else {
      let bothPageMax = [];
      for (e of a) {
        let pageCal = [];
        let splitPage = String(e).split("");
        let plusPage = plus(splitPage);
        let multiplePage = multiple(splitPage);
        pageCal.push(plusPage, multiplePage);
        bothPageMax.push(Math.max(...pageCal));
      }
      maxNum.push(Math.max(...bothPageMax)); // 63
      return maxNum;
    }
  }
  function plus(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
      result += parseInt(array[i], 10);
    }
    return result;
  }
  function multiple(array) {
    let result = 1;
    for (let i = 0; i < array.length; i++) {
      result *= parseInt(array[i], 10);
    }
    return result;
  }
  finalCal.push(cal(pobi), cal(crong));
  if (finalCal[0].includes(0) || finalCal[1].includes(0)) {
    result = -1;
  } else if (finalCal[0] > finalCal[1]) {
    result = 1;
  } else if (finalCal[0] < finalCal[1]) {
    result = 2;
  } else result = 0;

  var answer = result;
  return answer;
}

module.exports = problem1;
