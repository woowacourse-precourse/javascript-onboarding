function problem1(pobi, crong) {
  const pobi_left_nubmer = pobi[0];
  const pobi_right_number = pobi[1];

  let pobi_left_slice = String(pobi_left_nubmer).split("");
  let pobi_right_slice = String(pobi_right_number).split("");

  let pobi_left_sum = 0;
  let pobi_left_multiple = 1;

  for (let i in pobi_left_slice) {
    pobi_left_sum = pobi_left_sum + Number(pobi_left_slice[i]);
    pobi_left_multiple = pobi_left_multiple * Number(pobi_left_slice[i]);
  }

  let pobi_result = 0;

  if (pobi_left_sum >= pobi_left_multiple) {
    pobi_result = pobi_left_sum;
  } else {
    pobi_result = pobi_left_multiple;
  }

  const crong_left_nubmer = crong[0];
  const crong_right_number = crong[1];

  let crong_left_slice = String(crong_left_nubmer).split("");
  let crong_right_slice = String(crong_right_number).split("");

  let crong_left_sum = 0;
  let crong_left_multiple = 1;
  for (let i in crong_left_slice) {
    crong_left_sum = crong_left_sum + Number(crong_left_slice[i]);
    crong_left_multiple = crong_left_multiple * Number(crong_left_slice[i]);
  }

  let crong_result = 0;

  if (crong_left_sum >= crong_left_multiple) {
    crong_result = crong_left_sum;
  } else {
    crong_result = crong_left_multiple;
  }

  var answer;

  if (
    Number(pobi_right_number) - Number(pobi_left_nubmer) !==
    Number(crong_right_number) - Number(crong_left_nubmer)
  ) {
    return (answer = -1);
  }
  if (pobi_result > crong_result) {
    answer = 1;
  } else if (pobi_result < crong_result) {
    answer = 2;
  } else if (pobi_result == crong_result) {
    answer = 0;
  } else {
    answer = -1;
  }

  return answer;
}

module.exports = problem1;
