function problem1(pobi, crong) {
  let pobi_max = 0;
  let crong_max = 0;
  let multi = 1;
  let total = 0;

  if (except(pobi, crong)) {
    return -1;
  }

  for (let pobiNumber of pobi) {
    while (pobiNumber > 0) {
      multi *= pobiNumber % 10;
      total += pobiNumber % 10;
      pobiNumber = Math.floor(pobiNumber / 10);
    }

    if (pobi_max < multi) pobi_max = multi;
    if (pobi_max < total) pobi_max = total;
    multi = 1;
    total = 0;
  }
  console.log(pobi_max);

  for (let crongNumber of crong) {
    while (crongNumber > 0) {
      multi *= crongNumber % 10;
      total += crongNumber % 10;
      crongNumber = Math.floor(crongNumber / 10);
    }

    if (crong_max < multi) crong_max = multi;
    if (crong_max < total) crong_max = total;
    multi = 1;
    total = 0;
  }

  console.log(crong_max);

  if (pobi_max > crong_max) {
    return 1;
  } else if (pobi_max < crong_max) {
    return 2;
  } else if (pobi_max === crong_max) {
    return 0;
  } else {
    return -1;
  }
}

function except(pobi, crong) {
  if (pobi[0] + 1 !== pobi[1]) return true; //왼쪽페이지와 오른쪽 페이지가 연속된 숫자가 아닐때

  if (crong[0] + 1 !== crong[1]) return true; //왼쪽페이지와 오른쪽 페이지가 연속된 숫자가 아닐때

  if (pobi[0] % 2 === 0 || crong[0] % 2 === 0) return true; ////왼쪽페이지 짝수일때

  if (pobi[0] === 1 || pobi[1] === 400 || crong[0] === 1 || crong[1] === 400)
    return true;
  //pobi,crong 왼쪽페이지가 1이거나 오른쪽페이지가 400일때
}

module.exports = problem1;
const pobi = [399, 400];
const crong = [159, 160];
const answer = problem1(pobi, crong);
console.log(answer);
