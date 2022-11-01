function problem1(pobi, crong) {
  var pobiVal = Math.max(sum(pobi[0]), mul(pobi[0]), sum(pobi[1]), mul(pobi[1]))
  var crongVal = Math.max(sum(crong[0]), mul(crong[0]), sum(crong[1]), mul(crong[1]))
  var answer;

  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    answer = -1
  } else if (pobiVal === crongVal) {
    answer = 0
  } else if (pobiVal > crongVal) {
    answer = 1
  } else if (pobiVal < crongVal) {
    answer = 2
  }


  return answer;
}

function sum(n) {

  let sum = 0;

  do {
    sum += n % 10;
    n = Math.floor(n / 10);
  } while (n > 0);

  return sum;
}

function mul(n) {

  let mul = 1;

  do {
    mul *= n % 10;
    n = Math.floor(n / 10);
  } while (n > 0);

  return mul;
}

module.exports = problem1;
