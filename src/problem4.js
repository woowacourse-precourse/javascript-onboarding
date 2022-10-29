function problem4(word) {
  let upperCaseArr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
  let lowerCaseArr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));
  let result = [];

  for(let i = 0; i < word.length; i++) {
    if(word[i] === ' ') result.push(' ');
    if(upperCaseArr.includes(word[i])) result.push(upperCaseArr[26-upperCaseArr.indexOf(word[i])-1]);
    if(lowerCaseArr.includes(word[i])) result.push(lowerCaseArr[26-lowerCaseArr.indexOf(word[i])-1]);
  }

  return result.join('');
}

module.exports = problem4;
