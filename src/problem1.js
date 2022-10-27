function problem1(pobi, crong) {
  var answer;
  var players = [pobi, crong];
  if (players.filter((player) => player[1] - player[0] != 1).length > 0) {
    return -1;
  }

  var [pobiScore, crongScore] = players.map((player) => {
    var playerMax = Number.MIN_SAFE_INTEGER;
    player.forEach((number) => {
      var num = number;
      var result = 0;
      while (num > 0) {
        result += num % 10;
        num = parseInt(num / 10);
      }
      if (result > playerMax) playerMax = result;
      num = number;
      result = 1;
      while (num > 0) {
        result *= num % 10;
        num = parseInt(num / 10);
      }
      if (result > playerMax) playerMax = result;
    });
    return playerMax;
  });

  if (pobiScore > crongScore) answer = 1;
  else if (pobiScore < crongScore) answer = 2;
  else if (pobiScore == crongScore) answer = 0;

  return answer;
}

module.exports = problem1;
