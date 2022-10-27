function problem1(pobi, crong) {
  const checkExceptions = (pobi[1] - pobi[0]) - (crong[1] - crong[0]);

  const pobiLeftPageArray = String(pobi[0]).split("");
  const pobiRightPageArray = String(pobi[1]).split("");

  const pobiMax = Math.max(...
    [pobiLeftPageArray.reduce((acc, cur) => acc * Number(cur), 1),
    pobiLeftPageArray.reduce((acc, cur) => acc + Number(cur), 0),
    pobiRightPageArray.reduce((acc, cur) => acc * Number(cur), 1),
    pobiRightPageArray.reduce((acc, cur) => acc + Number(cur), 0)]
  );
  
  return answer;
}

module.exports = problem1;