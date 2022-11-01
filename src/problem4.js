//사전 만들기.
const cryptoDic = {
  "A": "Z", "B": "Y", "C": "X",
  "D": "W", "E": "V", "F": "U",
  "G": "T", "H": "S", "I": "R",
  "J": "Q", "K": "P", "L": "O",
  "M": "N", "N": "M", "O": "L",
  "P": "K", "Q": "J", "R": "I",
  "S": "H", "T": "G", "U": "F",
  "V": "E", "W": "D",
  "X": "C", "Y": "B", "Z": "A"
}
for (let key in cryptoDic) {
  cryptoDic[key.toLowerCase()] = cryptoDic[key].toLowerCase();
}


function problem4(word) {
  //문자 길이 제한사항
  if (word.length < 1 || word.length > 1000) {
    return console.log("Please check this, max length = 1000 , min-length 1")
  }

  let arr = []
  // 2. 영어만 변환
  const checkEng = /[a-zA-Z]/;
  for (let i = 0; i < word.length; i++) {
    if (checkEng.test(word[i])) {
      arr += cryptoDic[word[i]];
    } else {
      arr += word[i];
    }
  }
  //3. 값 추출.
  return arr;
}

module.exports = problem4;
