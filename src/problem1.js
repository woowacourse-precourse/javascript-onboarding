function problem1(pobi, crong) {
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
    return arr[0] > arr[1] ? arr[0] : arr[1];
  }

  function comparePoint(n1, n2) {
    return n1 > n2 ? n1 : n2;
  }

  var answer;
  return answer;
}

module.exports = problem1;
