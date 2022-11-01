function problem5(money) {
  const notes = new Array(9).fill(0);
  while (money > 0) {
    if (money >= 50000) {
      money -= 50000;
      notes[0] += 1;
    } else if (money >= 10000) {
      money -= 10000;
      notes[1] += 1;
    } else if (money >= 5000) {
      money -= 5000;
      notes[2] += 1;
    } else if (money >= 1000) {
      money -= 1000;
      notes[3] += 1;
    } else if (money >= 500) {
      money -= 500;
      notes[4] += 1;
    } else if (money >= 100) {
      money -= 100;
      notes[5] += 1;
    } else if (money >= 50) {
      money -= 50;
      notes[6] += 1;
    } else if (money >= 10) {
      money -= 10;
      notes[7] += 1;
    } else {
      notes[8] += money;
      money = 0;
    }
  }
  return notes;
}

module.exports = problem5;
