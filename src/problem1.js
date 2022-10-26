function problem1(pobi, crong) {
  if (!(pobi[1] - pobi[0] === 1) || !(crong[1] - crong[0] === 1)) return -1;
  if (pobi[0] === 1 || crong[0] === 1 || pobi[1] === 400 || crong[1] === 400)
    return -1;
  let pobiScore = [];
  let crongScore = [];
  pobi.forEach((n) => {
    const splited = n.toString().split("");
    const sum = splited.reduce((acc, cur) => acc + Number(cur), 0);
    const mul = splited.reduce((acc, cur) => acc * Number(cur), 1);
    pobiScore.push(Math.max(sum, mul));
  });
  const MaxPobi = Math.max(...pobiScore);
  crong.forEach((n) => {
    const splited = n.toString().split("");
    const sum = splited.reduce((acc, cur) => acc + Number(cur), 0);
    const mul = splited.reduce((acc, cur) => acc * Number(cur), 1);
    crongScore.push(Math.max(sum, mul));
  });
  const MaxCrong = Math.max(...crongScore);
  if (MaxPobi > MaxCrong) return 1;
  else if (MaxPobi < MaxCrong) return 2;
  else return 0;
}
console.log(problem1([1, 2], [100, 101]));
module.exports = problem1;
