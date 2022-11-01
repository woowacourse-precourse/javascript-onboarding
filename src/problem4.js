function problem4(word) {
  let splitWord = word.split('');
  const askiArr = splitWord.map(x=> x.charCodeAt())  
  let reverseArr = [];
  for (let x of askiArr){
    if (65<=x && x<=90) reverseArr.push(155-x);
    else if (97<=x && x<=122) reverseArr.push(219-x);
    else  reverseArr.push(x);
  }
  const answer= reverseArr.map(x=>String.fromCharCode(x)).join('')
  return answer;
}

module.exports = problem4;
