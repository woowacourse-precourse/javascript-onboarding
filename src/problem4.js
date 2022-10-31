function problem4(word) {
  //ascii A = 65, Z = 90 //ascii a = 97. z = 122
  var answer = "";
  for (let i=0; i<word.length;i++){
    let temp_ascii = word[i].charCodeAt(0)
    if (temp_ascii >= 65 && temp_ascii <= 90){
      answer = answer + String.fromCharCode(90 - (temp_ascii-65))
    } else if (temp_ascii >= 97 && temp_ascii <= 122) {
      answer = answer + String.fromCharCode(122 - (temp_ascii-97))
    } else {
      answer = answer + word[i]
    }
  }
  return answer;
}

module.exports = problem4;
