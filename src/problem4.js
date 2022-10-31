const convertToFrogLetter = letter => {
  let convertedLetter = letter;
  const ACode = 65, ZCode = 90, aCode = 97, zCode = 122;

  if (/[A-Z]/.test(letter))
    convertedLetter = String.fromCharCode(ACode + ZCode - letter.charCodeAt());
  else if (/[a-z]/.test(letter))
    convertedLetter = String.fromCharCode(aCode + zCode - letter.charCodeAt());

  return convertedLetter;
}

const problem4 = word => {
  const answer = word.split('').map(x => convertToFrogLetter(x)).join('');
  return answer;
}

module.exports = problem4;
