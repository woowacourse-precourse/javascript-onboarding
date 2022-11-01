function problem4(word) {
  var answer;
  let kid = "";
  let temp;
  for(i=0;i<word.length;i++){
      const ch_n = word[i].charCodeAt();
      if (65<=ch_n && ch_n<=90){
          temp = 155 - ch_n;
          kid+=String.fromCharCode(temp);
      }
      else if (97<=ch_n && ch_n<=122){
          temp = 219 - ch_n;
          kid+=String.fromCharCode(temp);
      }
      else{
          kid+=word[i];
      }
  }
  answer=kid;
  return answer;
}

module.exports = problem4;