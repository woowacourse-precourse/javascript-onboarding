function decoding (s) {
  s.forEach((x,i)=>{
    if (s[i] === s[i + 1]) {
      if(s[i+1] === s[i+2]){
        s.splice(i, 3);
        decoding(s);
      }
      else{
        s.splice(i, 2);
        decoding(s);
      }
    }
  })
};

function problem2(cryptogram) {
  let str = cryptogram.split("");
  decoding(str);
  let answer = str.join('');
  return answer;
}

module.exports = problem2;
