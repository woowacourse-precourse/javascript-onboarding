function cal_max(num) {
  let mul = 1;
  let sum = 0;
  while (num !== 0) {
    mul *= num % 10;
    sum += num % 10;
    num = parseInt(num / 10);
  }
  return Math.max(mul, sum);
}

function problem1(pobi, crong) {
  var answer;
  if ((pobi[0] % 2 == 1) && (pobi[1] == (pobi[0] + 1)) && (crong[0] % 2 == 1) && (crong[1] = crong[0] + 1)) {
    let pobi_res = [], crong_res = [];
    for (let i = 0; i < 2; i++) {
      pobi_res.push(cal_max(pobi[i]));
      crong_res.push(cal_max(crong[i]));
    }
    if (Math.max(...pobi_res) > Math.max(...crong_res)) {
      answer = 1;
    } else if (Math.max(...pobi_res) < Math.max(...crong_res)) {
      answer = 2;
    } else if (Math.max(...pobi_res) === Math.max(...crong_res)) {
      answer = 0;
    }
  } else {
    answer = -1;
  }
  return answer;
}

module.exports = problem1;
