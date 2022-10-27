function problem4(word) {
  let lowerCase = [];
  let upperCase = [];
  let answer = [];
  for(let i = 65; i <= 90; i++) upperCase.push(String.fromCharCode(i));
  for(let i = 97; i <= 122; i++) lowerCase.push(String.fromCharCode(i));

  for(const item of word) {
    if(item === ' ') {
      answer.push(' ');
    }
    if(upperCase.includes(item)) {
      const UPPER = upperCase.indexOf(item);
      const reverseWord = [...upperCase].reverse();
      answer.push(reverseWord[UPPER]);
    }
    if(lowerCase.includes(item)) {
      const LOWER = lowerCase.indexOf(item);
      const reverseWord = [...lowerCase].reverse();
      answer.push(reverseWord[LOWER]);
    }
  }
  return answer.join('');
}

module.exports = problem4;