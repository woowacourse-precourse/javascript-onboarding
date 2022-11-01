function problem4(word) {
  var answer;
  frogDic = [ "A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z" ]
  frogDic2 = [ "Z" , "Y" , "X" , "W" , "V" , "U" , "T" , "S" , "R" , "Q" , "P" , "O" , "N" , "M" , "L" , "K" , "J" , "I" , "H" , "G" , "F" , "E" , "D" , "C" , "B" , "A" ]
  temp = [...word]
  newWord = []
  var pattern_eng = /[a-zA-Z]/
  temp.forEach(str => {
    if (!pattern_eng.test(str)) {
      newWord.push(str)
      return;
    }

    var upperCaseStr = str.toUpperCase();
    var lowerCaseStr = str.toLowerCase();

    if (str === upperCaseStr) {
      myindex = frogDic.indexOf(upperCaseStr)
      newWord.push(frogDic2[myindex])
    }else if (str === lowerCaseStr) {
      myindex = frogDic.indexOf(upperCaseStr)
      newWord.push(frogDic2[myindex].toLowerCase())
    }

  })
  answer = newWord.join("") 
  return answer;
}
// console.log(problem4("R olev blf"))

module.exports = problem4;

// 주어진 말을 for문을 돌려가며 비교하면서 새 문자열을 만듬
// 비교할때 대문자 소문자 확인하기 
// 청개구리사전외 단어는 그대로 바꾸지 않고 넘기기
// 결과물 리턴