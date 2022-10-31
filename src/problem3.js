function problem3(number) {
<<<<<<< HEAD
  let answer;

  answer = countNumberOfClap(number);
  return answer;
}

function countNumberOfClap(number) {
  let result;

  result = 0;
  for (let i = 1; i <= number; i++) {
    result += i
      .toString()
      .split("")
      .filter((digit) => ["3", "6", "9"].includes(digit)).length;
  }
  return result;
}

=======
  var answer;
  return answer;
}

>>>>>>> 8458e00876e77cbdada319f34b483ab3683b5124
module.exports = problem3;
