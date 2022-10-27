function problem4(word) {
  var answer = reverse(word);
  return answer;
}
function reverse(word){
  let str = word.split("");
  for(let i=0;i<str.length;i++){
    let ASCIInum = str[i].charCodeAt(0);
    if(ASCIInum==32){
      str[i] = String.fromCharCode(ASCIInum);
    }
    else if(ASCIInum>=65 && ASCIInum<=90){
      str[i] = String.fromCharCode(155-ASCIInum);
    }
    else{
      str[i] = String.fromCharCode(219-ASCIInum);
    }
  }
  return str.join("");
}
module.exports = problem4;
