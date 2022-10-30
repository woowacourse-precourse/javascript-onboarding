const answerSheet = ["3", "6", "9"];

function problem3(number) {
  var answer;
  numArr = makeNumArr(number);
  return (answer = playGame(numArr));
}

const playGame = (numArr) => {
  let clap = 0;
  numArr.map((numArrE) => {
    [...numToStr(numArrE)].map((strE) => {
      answerSheet.map((answerSheetE) => {
        strE === answerSheetE ? (clap += 1) : null;
      });
    });
  });
  return clap;
};

const numToStr = (num) => {
  return String(num);
};

const makeNumArr = (num) =>
  Array.from(Array(num).keys())
    .map((v) => v + 1)
    .map((v) => v);

module.exports = problem3;
