function problem3(number) {
  let count = 0;
  const num = number.toString().split("");

  for (el of num) {
    if (el % 3 === 0 && el > 0) {
      count += 1;
    }
  }
  console.log(count);
}

module.exports = problem3;
