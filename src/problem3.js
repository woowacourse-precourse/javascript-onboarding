const MESSAGES = Object.freeze({
  ERROR_RANGE: '1 이상 10,000 이하의 자연수여야 합니다.',
});
const INCLUDES_NUMBERS = ['3', '6', '9'];

/** 포함된 문자 개수 */
const includesNumbersCount = (number) => {
  const splittedArray = `${number}`.split('');
  const includesArray = splittedArray.filter((splittedNumber) => {
    if (INCLUDES_NUMBERS.includes(splittedNumber)) return splittedNumber;
  });
  return includesArray.length;
};
/** 파라미터 조건 확인 */
const isValidNumber = (number = 0) => {
  if (number < 1 || number > 10000) return true;
  if (!Number.isInteger(number)) return true;

  return false;
};

function problem3(number = 0) {
  let count = 0;
  if (isValidNumber(number)) return MESSAGES.ERROR_RANGE;

  for (let i = 1; i <= number; i++) {
    count += includesNumbersCount(i);
  }
  return count;
}

module.exports = problem3;
