function problem1(pobi, crong) {
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
