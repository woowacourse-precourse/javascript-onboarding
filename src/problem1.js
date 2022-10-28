function sumFun(N) {
  let a = parseInt(N / 100);
  let b = parseInt((N % 100) / 10);
  if (a == 0) a = 0;
  if (b == 0) b = 0;
  let answer = parseInt(a + b + (N % 10));
  return answer;
}

function mulFun(N) {
  let a = parseInt(N / 100);
  let b = parseInt((N % 100) / 10);
  if (a == 0) a = 1;
  if (b == 0) b = 1;
  let answer = parseInt(a * b * (N % 10));
  return answer;
}
function FindEx(a, b) {
  if (a - b != -1) {
    return -1;
  }
  if (a < 1 || b < 1) {
    return -1;
  }
  if (a > 400 || b > 400) {
    return -1;
  }
  if (a == 1 || a == 400 || b == 1 || b == 400) {
    return -1;
  }
  return 0;
}
function problem1(pobi, crong) {
  var answer;
  let pobiLeft = pobi[0];
  let crongLeft = crong[0];
  let pobiRight = pobi[1];
  let crongRight = crong[1];
  if (FindEx(crongLeft, crongRight) == -1)
    return -1;
  if (FindEx(pobiLeft, pobiRight) == -1)
    return -1;
  let pobiScore = Math.max(
    sumFun(pobiLeft),
    mulFun(pobiLeft),
    sumFun(pobiRight),
    mulFun(pobiRight)
  );
  let crongScore = Math.max(
    sumFun(crongLeft),
    mulFun(crongLeft),
    sumFun(crongRight),
    mulFun(crongRight)
  );
  //1이나 400 나오는 경우, 페이지가 연속되지 않은 경우 = -1
  if (pobiScore > crongScore) answer = 1;
  else if (pobiScore < crongScore) answer = 2;
  else if ((pobiScore = crongScore)) answer = 0;
  return answer;
}

module.exports = problem1;
