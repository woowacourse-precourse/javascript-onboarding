function problem3(number) {
  let count = 0;
  let arr = [];

  for (let i = 1; i <= number; i++) {
    if (i < 10) {
      if (i === 3 || i === 6 || i === 9) {
        count += 1;
      }
    } else {
      arr = i.toString().split("");
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === "3" || arr[j] === "6" || arr[j] === "9") {
          count += 1;
        }
      }
    }
  }

  return count;
}

console.log(problem3(33));

module.exports = problem3;
