function problem1(pobi, crong) {
  let answer;
  let check = 0;

  let pobi_sum = 0;
  let pobi_mul = 0;
  let pobi_score = 0;
  let crong_sum = 0;
  let crong_mul = 0;
  let crong_score = 0;

  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) check = -1;

  if (check !== -1) {
    for (let k = 0; k < 2; k++) {
      let tmp1 = String(pobi[k]);
      let tmp2 = String(crong[k]);
      pobi[k] = tmp1;
      crong[k] = tmp2;
    }

    for (let i = 0; i < 2; i++) {
      let pobi_len = pobi[i].length;
      let crong_len = crong[i].length;
      let sum = 0;
      let mul = 1;
      for (let j = 0; j < pobi_len; j++) {
        sum += parseInt(pobi[i].charAt(j));
        mul *= parseInt(pobi[i].charAt(j));
      }
      if (pobi_sum < sum) pobi_sum = sum;
      if (pobi_mul < mul) pobi_mul = mul;

      sum = 0;
      mul = 1;
      for (let h = 0; h < crong_len; h++) {
        sum += parseInt(crong[i].charAt(h));
        mul *= parseInt(crong[i].charAt(h));
      }
      if (crong_sum < sum) crong_sum = sum;
      if (crong_mul < mul) crong_mul = mul;
    }

    if (pobi_mul < pobi_sum) pobi_score = pobi_sum;
    else pobi_score = pobi_mul;
    if (crong_mul < crong_sum) crong_score = crong_sum;
    else crong_score = crong_mul;
  }
  if (check === -1) answer = -1;
  else if (pobi_score == crong_score) answer = 0;
  else if (pobi_score > crong_score) answer = 1;
  else if (pobi_score < crong_score) answer = 2;
  return answer;
}
module.exports = problem1;
