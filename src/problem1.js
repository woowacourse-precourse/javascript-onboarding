function problem1(pobi, crong) {
  var answer;
  const pobi_left = pobi[0].toString();
  const pobi_right = pobi[1].toString();
  const crong_left = crong[0].toString();
  const crong_right = crong[1].toString();
  var pl_sum = 0;
  var pr_sum = 0;
  var pl_mul = 1;
  var pr_mul = 1;
  var cl_sum = 0;
  var cr_sum = 0;
  var cl_mul = 1;
  var cr_mul = 1;

  pobi_values = new Array();
  crong_values = new Array();
  if ((pobi[1] != pobi[0] + 1) || (crong[1] != crong[0] + 1)) {
    answer = -1;

    return answer;
  }

  for (let i of pobi_left) {
    pl_sum += Number(i);
    pl_mul *= Number(i);
  }
  pobi_values.push(pl_sum, pl_mul);

  for (let i of pobi_right) {
    pr_sum += Number(i);
    pr_mul *= Number(i);
  }
  pobi_values.push(pr_sum, pr_mul);

  for (let j of crong_left) {
    cl_sum += Number(j);
    cl_mul += Number(j);
  }
  crong_values.push(cl_sum, cl_mul);

  for (let j of crong_right) {
    cr_sum += Number(j);
    cr_mul *= Number(j);
  }
  crong_values.push(cr_sum, cr_mul);

  const pobi_max = Math.max(...pobi_values);
  const crong_max = Math.max(...crong_values);

  if (pobi_max > crong_max) {
    answer = 1;
  } else if (pobi_max < crong_max) {
    answer = 2;
  } else if (pobi_max === crong_max) {
    answer = 0;
  }

  return answer;
}

module.exports = problem1;