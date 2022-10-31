function problem1(pobi, crong) {
  for (let i = 0; i < 2; i++) {
    const pobi_diff = pobi[1] - pobi[0];
    const crong_diff = crong[1] - crong[0];

    if (!(pobi_diff == 1)) return -1;
    if (!(crong_diff == 1)) return -1;
  }
  
  const pobi_max = Math.max(
    sum(pobi[0]),
    sum(pobi[1]),
    mul(pobi[0]),
    mul(pobi[1])
  );
  
  const crong_max = Math.max(
    sum(crong[0]),
    sum(crong[1]),
    mul(crong[0]),
    mul(crong[1])
  );

  return pobi_max > crong_max ? 1
    : pobi_max < crong_max ? 2
    : pobi_max == crong_max && 0;
}

module.exports = problem1;

const sum = (num) => {
  const string_num = String(num);
  let res = 0;

  for (let i = 0; i < string_num.length; i++) {
    res += Number(string_num[i]);
  }

  return res;
}

const mul = (num) => {
  const string_num = String(num);
  let res = 1;

  for (let i = 0; i < string_num.length; i++) {
    res *= Number(string_num[i]);
  }
  
  return res;
}
