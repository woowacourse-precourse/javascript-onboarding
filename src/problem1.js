function problem1(pobi, crong) {
  let answer;
  let pobiScore = [];
  let crongScore = [];

  if (
    pobi[1] - pobi[0] != 1 ||
    crong[1] - crong[0] != 1 ||
    pobi[0] % 2 != 1 ||
    pobi[1] % 2 != 0 ||
    crong[0] % 2 != 1 ||
    crong[1] % 2 != 0
  ) {
    return -1;
  }

  for (var i = 0; i < 2; i++) {
    var sum = 0;
    var mul = 1;
    var n = pobi[i];

    do {
      var quot = n % 10;
      sum += quot;
      mul *= quot;

      n = Math.floor(n / 10);
    } while (n > 0);

    pobiScore.push(sum);
    pobiScore.push(mul);
  }

  for (var i = 0; i < 2; i++) {
    var sum = 0;
    var mul = 1;
    var n = crong[i];
    do {
      var quot = n % 10;
      sum += quot;
      mul *= quot;
      n = Math.floor(n / 10);
    } while (n > 0);

    crongScore.push(sum);
    crongScore.push(mul);
  }

  pobiScore.sort(function (a, b) {
    return b - a;
  });
  crongScore.sort(function (a, b) {
    return b - a;
  });

  if (pobiScore[0] > crongScore[0]) answer = 1;
  else if (pobiScore[0] < crongScore[0]) answer = 2;
  else answer = 0;

  return answer;
}

module.exports = problem1;
