function problem3(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    figure = i + "";
    figure = figure.split("");
    figure.map((item) => {
      if (item == "3" || item == "6" || item == "9") {
        count++;
      }
    });
  }
  return count;
}
console.log(problem3(33));

module.exports = problem3;
