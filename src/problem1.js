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

  function score(player) {}

  function result(player1, player2) {}

  if (exception(pobi, crong)) answer = -1;
  else answer = result(score(pobi), score(crong));

  return answer;
}

module.exports = problem1;
