function problem1(pobi, crong) {
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