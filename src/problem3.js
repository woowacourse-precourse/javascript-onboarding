function problem3(number) {
  var answer = count369(number);
  return answer;
}

const makeNumberWord = (number) => {
  return Array.from({ length: number }, (_, index) => index + 1).join("");
};

const makeOnly369 = (word) => {
  return word.replaceAll(/[0124578]/g, "");
};

const count369 = (number) => {
  return makeOnly369(makeNumberWord(number)).length;
};

module.exports = problem3;
