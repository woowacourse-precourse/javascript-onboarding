function makeSum(n) {
  let sum = 0;
  do {
    sum += n % 10;
    n = Math.floor(n / 10);
  } while (n > 0);
  return sum;
}

function makeMul(n) {
  let mul = 1;
  do {
    mul *= n % 10;
    n = Math.floor(n / 10);
  } while (n > 0);
  return mul;
}

function choosePoint(arr) {
  for (let i = 0; i < 2; i++) {
    arr[i] = comparePoint(makeSum(arr[i]), makeMul(arr[i]));
  }
  return comparePoint(arr[0], arr[1]);
}

function comparePoint(n1, n2) {
  return n1 > n2 ? n1 : n2;
}

function problem1(pobi, crong) {
  var answer;
  if (pobi[1] - pobi[0] == 1 && crong[1] - crong[0] == 1) {
    let pobiPoint = choosePoint(pobi);
    let crongPoint = choosePoint(crong);
    if (pobiPoint > crongPoint) {
      answer = 1;
    } else if (pobiPoint < crongPoint) {
      answer = 2;
    } else if (pobiPoint == crongPoint) {
      answer = 0;
    }
  } else {
    answer = -1;
  }
  return answer;
}

module.exports = problem1;
