function problem4(word) {
  let ans ="";
  for(let i = 0; i < word.length ; i++){
    if(word[i] === ' '){
      ans += ' ';
      continue;
    }else if(word[i].charCodeAt(0)<=90){
      ans+=String.fromCharCode(155-word[i].charCodeAt(0));
    }else {
      ans+=String.fromCharCode(219-word[i].charCodeAt(0));
    }
  }
  return ans;
}

module.exports = problem4;
