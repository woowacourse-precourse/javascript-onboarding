function problem4(word) {
  if (typeof word !== 'string') throw new TypeError('매개변수는 문자열 타입이여야 합니다.');
  if (!word.length || word.length > 1000) throw new RangeError('매개변수는 1 이상 1,000 이하의 문자열이여야 합니다.');

  const ALPHABET_LENGTH = 26;
  const ASCII_NUMBER_CODE_UPPER_A = 65;
  const ASCII_NUMBER_CODE_UPPER__Z = 90 ;
  const ASCII_NUMBER_CODE_LOWER_A = 97;
  const ASCII_NUMBER_CODE_LOWER__Z = 122;

  const splitWords = [...word];
  const uppers = Array.from({length:ALPHABET_LENGTH}, (_,i) => String.fromCharCode(ASCII_NUMBER_CODE_UPPER_A+i));
  const lowers = Array.from({length:ALPHABET_LENGTH}, (_,i) => String.fromCharCode(ASCII_NUMBER_CODE_LOWER_A+i));
  
  const changeOppositeStr = str => {
    const codePosition = str.charCodeAt();

    return (codePosition >= ASCII_NUMBER_CODE_UPPER_A && codePosition <= ASCII_NUMBER_CODE_UPPER__Z
      ? [...uppers].reverse()[uppers.indexOf(str)]
      : codePosition >= ASCII_NUMBER_CODE_LOWER_A && codePosition <= ASCII_NUMBER_CODE_LOWER__Z 
      ? [...lowers].reverse()[lowers.indexOf(str)]
      : str);
  }
  
  return splitWords.map(splitedWord => changeOppositeStr(splitedWord)).join('');
}

module.exports = problem4;
