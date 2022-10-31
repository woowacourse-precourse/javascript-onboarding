function problem3(number) {
  const list = {};
  let clap = 0;

  for (let i = 0; i <= 9; i++) {
    list[i] = i % 3 === 0 && i !== 0 ? 1 : 0;
    if (list[i] > 0) {
      clap += 1;
    }
    if (i === number) {
      return clap;
    }
  }

  for (let i = 10; i <= number; i++) {
    const includeClap = Math.floor(i % 10) % 3 === 0 && i % 10 > 0 ? 1 : 0;
    list[i] = list[Math.floor(i / 10)] + includeClap;
    clap += list[i];
  }
  return clap;
}

module.exports = problem3;
