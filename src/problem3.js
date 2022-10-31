function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let numArray = Array.from(String(i));
    for (let j = 0; j < numArray.length; j++) {
      if (numArray[j] === "3" || numArray[j] === "6" || numArray[j] === "9") {
        answer++;
      }
    }
  }
  return answer;
}

module.exports = problem3;
