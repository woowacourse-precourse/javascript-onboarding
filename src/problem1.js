function problem1(pobi, crong) {
  var answer;

  function exception(player1, player2) {
    var players = [player1, player2];
    if (
      players.filter(
        (player) =>
          (player[1] - player[0] != 1) |
          player.includes(1) |
          player.includes(2) |
          player.includes(399) |
          player.includes(400)
      ).length > 0
    )
      return true;
    else return false;
  }

  function score(player) {
    var playerMax = Number.MIN_SAFE_INTEGER;
    player.forEach((page) => {
      var number = page;
      var result = 0;
      while (number > 0) {
        result += number % 10;
        number = parseInt(number / 10);
      }
      if (result > playerMax) playerMax = result;
      number = page;
      result = 1;
      while (number > 0) {
        result *= number % 10;
        number = parseInt(number / 10);
      }
      if (result > playerMax) playerMax = result;
    });
    return playerMax;
  }

  function result(player1, player2) {
    if (player1 == player2) return 0;
    else if (player1 > player2) return 1;
    else if (player1 < player2) return 2;
  }

  if (exception(pobi, crong)) answer = -1;
  else answer = result(score(pobi), score(crong));

  return answer;
}

module.exports = problem1;
