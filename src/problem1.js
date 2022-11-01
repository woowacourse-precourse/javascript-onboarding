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
  return answer;
}

module.exports = problem1;
