class Game {
  constructor(number) {
    this.number = number;
  }

  start() {
    let cnt = 0;
    for (let step = 1; step <= this.number; step++) {
      cnt += this.count(step);
    }
    return cnt;
  }

  count(num) {
    return [...num.toString().matchAll(/[3|6|9]/g)].length;
  }
}

function problem3(number) {
  const game = new Game(number);
  return game.start();
}

module.exports = problem3;
