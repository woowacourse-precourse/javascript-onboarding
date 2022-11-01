function problem1(pobi, crong) {
  var answer = [];
  let finalCal = [];
  finalCal.push(cal(pobi), cal(crong));
  console.log(finalCal);
  if (finalCal[0].includes(0) || finalCal[1].includes(0)) {
    answer.push(-1);
  } else if (finalCal[0] > finalCal[1]) {
    answer.push(1);
  } else if (finalCal[0] < finalCal[1]) {
    answer.push(2);
  } else answer.push(0);
  return answer;
}

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
      console.log(`더한값, 곱한값 ${pageCal}`);
      bothPageMax.push(Math.max(...pageCal));
      console.log(`각 페이지의 최댓값${bothPageMax}`);
    }
    maxNum.push(Math.max(...bothPageMax)); // 63
    console.log(`한 인물의 최댓값${maxNum}`);
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

module.exports = problem1;
