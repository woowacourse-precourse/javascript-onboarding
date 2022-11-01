const isWord = (word) => {
  if (word.length < 1 || 1000 < word.length) return false;
  return true;
}

const reverseWord = (word) => {
  let answer;
  let wordArray = Array.from(word)
  let reverseArray = []

  wordArray.map((element) => {
    let charCode = element.charCodeAt(0)
    if (charCode >= 97 && charCode <= 122) {
      charCode = 219 - charCode
    }
    if (charCode >= 65 && charCode <= 90) {
      charCode = 155 - charCode
    }
    reverseArray.push(String.fromCharCode(charCode));
  })
  
  answer = reverseArray.join("")
  return answer;
}

function problem4(word) {
  let result = reverseWord(word);

  if (!isWord(word)) { throw Error("1이상 1000이하의 문자열을 입력해주세요.") }
  else return result;
}

module.exports = problem4;