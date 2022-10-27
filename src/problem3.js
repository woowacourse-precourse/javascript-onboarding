const is369 = (n) => n === "3" || n === "6" || n === "9";

const game369 = (number) => {
  return String(number)
    .split("")
    .filter((n) => is369(n)).length;
};

function problem3(number) {

  let clap = 0;

  for (let i = 1; i <= number; i++) {
    clap += game369(i);
  }

  return clap;
}

module.exports = problem3;
