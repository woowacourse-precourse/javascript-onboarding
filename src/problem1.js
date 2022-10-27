function problem1(pobi, crong) {
  const checkExceptions = (pobi[1] - pobi[0]) - (crong[1] - crong[0]);

  const pobiLeftPageArray = String(pobi[0]).split("");
  const pobiRightPageArray = String(pobi[1]).split("");

  const crongLeftPageArray = String(crong[0]).split("");
  const crongRightPageArray = String(crong[1]).split("");

  const pobiMax = Math.max(...
    [pobiLeftPageArray.reduce((acc, cur) => acc * Number(cur), 1),
    pobiLeftPageArray.reduce((acc, cur) => acc + Number(cur), 0),
    pobiRightPageArray.reduce((acc, cur) => acc * Number(cur), 1),
    pobiRightPageArray.reduce((acc, cur) => acc + Number(cur), 0)]
  );

  const crongMax = Math.max(...
    [crongLeftPageArray.reduce((acc, cur) => acc * Number(cur), 1),
    crongLeftPageArray.reduce((acc, cur) => acc + Number(cur), 0),
    crongRightPageArray.reduce((acc, cur) => acc * Number(cur), 1),
    crongRightPageArray.reduce((acc, cur) => acc + Number(cur), 0)]
  );

  const answer = checkExceptions ? -1 : pobiMax === crongMax ? 0 : pobiMax > crongMax ? 1 : 2;
  
  return answer;
}

module.exports = problem1;