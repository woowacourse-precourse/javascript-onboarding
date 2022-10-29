function problem1(pobi, crong) {
  if (pobi.length !== 2 || crong.length !== 2) {
    return -1;
  } else if ((pobi[1] - pobi[0]) !== 1 || (crong[1] - crong[0]) !== 1) {
    return -1;
  } else if (pobi[0] % 2 !== 1 || crong[0] % 2 !== 1) {
    return -1;
  } else if (pobi[1] > 400 || crong[1] > 400) {
    return -1;
  }

  const pobi_nums = calc(pobi);
  const crong_nums = calc(crong);

  const pobi_max = Math.max.apply(null, pobi_nums);
  const crong_max = Math.max.apply(null, crong_nums);

  if (pobi_max > crong_max) {
    return 1;
  } else if (pobi_max < crong_max) {
    return 2;
  } else {
    return 0;
  }

}

function calc(name) {
  const arr = [];
  for (let i = 0; i < name.length; i++) {
    const nums = String(name[i]).split('').map(x => +x);
    arr.push(nums.reduce((a, b) => a + b));
    arr.push(nums.reduce((a, b) => a * b));
  }
  return arr;
}

module.exports = problem1;