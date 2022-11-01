function problem4(word) {
  var answer;
  answer = reverseWord(word);
  console.log(answer);
  return answer;
}
function reverseWord(word){
  let reWord ="";
  for(let i = 0; i < word.length; i++){
    if(65<= word.charCodeAt(i) && word.charCodeAt(i)<= 90)
      reWord += String.fromCharCode(155 - word.charCodeAt(i));
    else if(97<= word.charCodeAt(i) && word.charCodeAt(i)<= 122)
      reWord += String.fromCharCode(219 - word.charCodeAt(i));
    else 
      reWord += word[i];
  }
  return reWord;
}
/* 
A = 65
Z = 90
a = 97
z = 122

reverse 되는 애들끼리 더하면 항상 같은 값이라는걸 이용해서
아스키 코드로 풀어보았다.
*/
module.exports = problem4;
