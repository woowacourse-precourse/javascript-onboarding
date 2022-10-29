function multiple(num) {
  let result = 1;
  while (num !== 0) {
    result *= num % 10;
    num = parseInt(num / 10);
  }
  return result
}

function plus(num) {
  let result = 0;
  while (num !== 0) {
    result += num % 10;
    num = parseInt(num / 10)
  }
  return result
}

function problem1(pobi, crong) {
  var answer;
  if ((pobi[0] % 2 == 1) && (pobi[1] == (pobi[0] + 1)) && (crong[0] % 2 == 1) && (crong[1] = crong[0] + 1)) {
    let pobires = [], crongres = [];
    for (let i = 0; i < 2; i++) {
      pobires.push(multiple(pobi[i]));
      pobires.push(plus(pobi[i]));
      crongres.push(multiple(crong[i]));
      crongres.push(plus(crong[i]));
    }
    if (Math.max(...pobires) > Math.max(...crongres)) {
      answer = 1;
    } else if (Math.max(...pobires) < Math.max(...crongres)) {
      answer = 2;
    } else if (Math.max(...pobires) === Math.max(...crongres)) {
      answer = 0;
    }
  } else {
    answer = -1;
  }
  return answer;
}

module.exports = problem1;
