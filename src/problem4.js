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
  const converseUpper = 155
  var changeAscii = converseUpper - n
  var changeAlpha = String.fromCharCode(changeAscii)
  return changeAlpha
}
function lowertoAsCii(n){
  const converseLower = 219
  var changeAscii = converseLower - n
  var changeAlpha = String.fromCharCode(changeAscii)
  return changeAlpha
}
module.exports = problem4;
