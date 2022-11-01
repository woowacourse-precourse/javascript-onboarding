function problem3(number) {
  let count = 0;
  let game = [];

  if (number < 3) return 1;

  for (let i = 3; i <= number; i++) {
    game = String(i).match(/[3|6|9]/g);

    if (game !== null && game.length >= 2) {
      count += game.length - 1;
    }
    if (game !== null) {
      count++;
    }
  }

  return count;
}

module.exports = problem3;
