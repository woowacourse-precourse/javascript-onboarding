function problem4(word) {
  var answer = "";
  for (let i=0; i<word.length;i++){
    let ascii = word.charCodeAt(i)
    if (65<=ascii && ascii<=90){
      changeAlpha = UppertoAsCii(ascii)
      answer += changeAlpha
    }
    else if (97<=ascii && ascii<=122){
      changeAlpha = lowertoAsCii(ascii)
      answer += changeAlpha
    }
    else{
      answer += word[i]
    }
  } 
  return answer;
}
function UppertoAsCii(n){
  var changeAscii = 155 - n
  var changeAlpha = String.fromCharCode(changeAscii)
  return changeAlpha
}
function lowertoAsCii(n){
  var changeAscii = 219 - n
  var changeAlpha = String.fromCharCode(changeAscii)
  return changeAlpha
}
module.exports = problem4;
