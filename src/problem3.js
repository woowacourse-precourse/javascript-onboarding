function problem3(number) {
  let clap = 0;
  for (let index = 0; index < number; index++) {
    const num = String(index + 1);
    clap += num
      .split("")
      .filter((x) => x === "3" || x === "6" || x === "9").length;
  }
  return clap;
}

module.exports = problem3;
