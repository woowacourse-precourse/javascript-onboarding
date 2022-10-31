const isExcept = (pageL, pageR) => {
  if (pageL >= pageR) return true;
  if (Math.abs(pageL - pageR) > 1) return true;
  if (!(pageL % 2)) return true;
  if (pageR % 2) return true;
  return false;
};

const calScore = (digits) => {
  const operations = {
    '+': (digitArr) => digitArr.reduce((acc, digit) => acc + digit, 0),
    '*': (digitArr) => digitArr.reduce((acc, digit) => acc * digit, 1),
  };
  const scores = Object.keys(operations).map((operator) =>
    operations[operator](digits)
  );
  return Math.max(...scores);
};

const getDigits = (num) =>
  num
    .toString()
    .split('')
    .map((digit) => +digit);

const getMaxScore = ([pageL, pageR]) => {
  if (isExcept(pageL, pageR)) return -1;

  const leftDigits = getDigits(pageL);
  const rightDigits = getDigits(pageR);
  return Math.max(calScore(leftDigits), calScore(rightDigits));
};

function problem1(pobi, crong) {
  const EXCEPTION = -1;
  const TIE = 0;
  const POBI_WIN = 1;
  const CRONG_WIN = 2;
  const pobiScore = getMaxScore(pobi);
  const crongScore = getMaxScore(crong);

  if (pobiScore === EXCEPTION) return EXCEPTION;
  if (crongScore === EXCEPTION) return EXCEPTION;
  if (pobiScore === crongScore) return TIE;
  return pobiScore > crongScore ? POBI_WIN : CRONG_WIN;
}

module.exports = problem1;
