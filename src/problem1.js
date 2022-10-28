function problem1(pobi, crong) {

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
