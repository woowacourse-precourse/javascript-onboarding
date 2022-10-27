function problem1(pobi, crong) {
  let pobi_score = 0;
  let crong_score = 0;

  for (let i = 0; i < pobi.length; i++) {
    pobi_score = Math.max(plus(pobi[i]), multiple(pobi[i]));
  }

  for (let i = 0; i < crong.length; i++) {
    crong_score = Math.max(plus(crong[i]), multiple(crong[i]));
  }

  if (pobi[0] + 1 !== pobi[1] || crong[0] + 1 !== crong[1]) return -1;
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
