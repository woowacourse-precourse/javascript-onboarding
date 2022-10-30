function problem1(pobi, crong) {
  var answer;
  function get_max(player) {
    let player_max = 0;
    let player_plus = 0;
    let player_multiple = 1;
    for (var i = 0; i < player.length; i++) {
      let new_player = (player[i] + '').split('');
      for (var j = 0; j < new_player.length; j++) {
        player_plus += parseInt(new_player[j]);
        player_multiple *= parseInt(new_player[j]);
      }
      let max;
      if (player_plus < player_multiple) {
        max = player_multiple;
      } else {
        max = player_plus;
      }
      if (player_max < max) {
        player_max = max;
      }
    }
    return player_max;
  }

  let crong_max = get_max(crong);
  let pobi_max = get_max(pobi);
  if (crong_max < pobi_max) {
    answer = 1;
  } else if (crong_max > pobi_max) {
    answer = 2;
  } else if (crong_max == pobi_max) {
    answer = 0;
  }
  if (parseInt(pobi[0]) + 1 != parseInt(pobi[1]) || parseInt(crong[0]) + 1 != parseInt(crong[1])) {
    answer = -1;
  }

  return answer;
}

module.exports = problem1;
