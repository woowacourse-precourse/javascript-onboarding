function problem1(pobi, crong) {
  const pobi_score_arr = [];
  const crong_score_arr = [];
  let pobi_score = 0;
  let crong_score = 0;

  for (let i = 0; i < pobi.length; i++) {
    pobi_score_arr.push(plus(pobi[i]), multiple(pobi[i]));
  }

  for (let i = 0; i < crong.length; i++) {
    crong_score_arr.push(plus(crong[i]), multiple(crong[i]));
  }

  pobi_score = Math.max(...pobi_score_arr);
  crong_score = Math.max(...crong_score_arr);

  if (
    pobi[0] + 1 !== pobi[1] ||
    crong[0] + 1 !== crong[1] ||
    pobi[0] < 1 ||
    crong[0] < 1 ||
    pobi[1] > 400 ||
    crong[1] > 400 ||
    pobi[0] % 2 === 0 ||
    crong[0] % 2 === 0 ||
    pobi[1] % 2 !== 0 ||
    crong[1] % 2 !== 0
  )
    return -1;
  else if (pobi_score > crong_score) return 1;
  else if (pobi_score < crong_score) return 2;
  else return 0;
}

function plus(number) {
  const string_number = String(number);
  let plus_sum = 0;

  for (let i = 0; i < string_number.length; i++) {
    plus_sum += parseInt(string_number[i]);
  }
  return plus_sum;
}

function multiple(number) {
  const string_number = String(number);
  let multiple_sum = 1;

  for (let i = 0; i < string_number.length; i++) {
    multiple_sum *= parseInt(string_number[i]);
  }
  return multiple_sum;
}

module.exports = problem1;
