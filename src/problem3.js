function problem3(number) {
  var answer;
  return answer;
}

const makeNumberWord = (number) => {
  return Array.from({ length: number }, (_, index) => index + 1).join("");
};

const makeOnly369 = (word) => {
  return word.replaceAll(/[0124578]/g, "");
};

module.exports = problem3;
