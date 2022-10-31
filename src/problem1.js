function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;
  let pobi_res = [];
  let crong_res = [];
  const cal = (num) => {
    let temp = String(num).split("").map(Number);
    let res = [];
    res.push(temp.reduce((acc, cur) => acc + cur, 0));
    res.push(temp.reduce((a, c) => a * c, 1));
    return Math.max(...res);
  };
  pobi.forEach((el) => {
    pobi_res.push(cal(el));
  });
  crong.forEach((el) => {
    crong_res.push(cal(el));
  });
  return Math.max(...pobi_res) >= Math.max(...crong_res)
    ? Math.max(...pobi_res) > Math.max(...crong_res)
      ? 1
      : 0
    : 2;
}

module.exports = problem1;
