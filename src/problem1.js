function problem1(pobi, crong) {
  let answer;
  const compare = (page) => {
    arr = String(page).split("");
    arr.forEach((element, index) => {
      arr[index] = Number(element);
    });
    sumResult = arr.reduce((sum, current) => sum + current, 0);
    mulResult = arr.reduce((mul, current) => mul * current, 1);

    return sumResult >= mulResult ? sumResult : mulResult;
  };

  if (
    pobi[0] != 1 &&
    pobi[1] != 400 &&
    crong[0] != 1 &&
    crong[1] != 400 &&
    pobi.length === 2 &&
    crong.length === 2 &&
    pobi[1] == pobi[0] + 1 &&
    crong[1] == crong[0] + 1
  ) {
    let pobiPoint =
      compare(pobi[0]) >= compare(pobi[1])
        ? compare(pobi[0])
        : compare(pobi[1]);
    let crongPoint =
      compare(crong[0]) >= compare(crong[1])
        ? compare(crong[0])
        : compare(crong[1]);

    if (pobiPoint > crongPoint) answer = 1;
    else if (pobiPoint < crongPoint) answer = 2;
    else if (pobiPoint == crongPoint) answer = 0;
  } else answer = -1;

  return answer;
}

module.exports = problem1;
