function problem4(word) {
  if (typeof word !== 'string') throw new TypeError('매개변수는 문자열 타입이여야 합니다.');
  if (!word.length || word.length > 1000) throw new RangeError('매개변수는 1 이상 1,000 이하의 문자열이여야 합니다.');

  const splitWord = [...word];
  const uppers = Array.from({length:26}, (_,i) => String.fromCharCode(65+i));
  const lowers = Array.from({length:26}, (_,i) => String.fromCharCode(97+i));
  
  const changeOppositeStr = str => {
    const codePosition = str.charCodeAt();

    return (codePosition >= 65 && codePosition <= 90
      ? [...uppers].reverse()[uppers.indexOf(str)] 
      : codePosition >= 97 && codePosition <= 122 
      ? [...lowers].reverse()[lowers.indexOf(str)] 
      : str);
  }
  
  return splitWord.map(elem => changeOppositeStr(elem)).join('');
}

module.exports = problem4;
