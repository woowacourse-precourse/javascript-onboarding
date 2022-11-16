const convertToFrogLetter = letter => {
  let convertedLetter = letter;
  const CAPITAL_A_CODE = 65, CAPITAL_Z_CODE = 90, SMALL_A_CODE = 97, SMALL_Z_CODE = 122;

  if (/[A-Z]/.test(letter))
    convertedLetter = String.fromCharCode(CAPITAL_A_CODE + CAPITAL_Z_CODE - letter.charCodeAt());
  else if (/[a-z]/.test(letter))
    convertedLetter = String.fromCharCode(SMALL_A_CODE + SMALL_Z_CODE - letter.charCodeAt());

  return convertedLetter;
}

const problem4 = word => {
  const answer = word.split('').map(x => convertToFrogLetter(x)).join('');
  return answer;
}

module.exports = problem4;
