function problem3(number) {
  class Game369 {
    constructor(number) {
      this.number = number;
    }
    handclap() {
      let clap = 0;
      const regex365 = /3|6|9/g;
      for (let i = 1; i <= this.number; i++) {
        clap += (String(i).match(regex365) || []).length;
      }
      return clap;
    }
  }

  const answer = new Game369(number).handclap();

  return answer;
}

module.exports = problem3;
