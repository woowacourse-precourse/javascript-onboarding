//예외사항
function exception(word) {
  if (word.length < 1 || word.length > 1000) {
    return true;
  }
  return false;
}

//유니코드 차를 이용한 알파벳 리버스
function reverseWords(words) {
  let reverse_words = [];
  words.map((word) => {
    let word_unicode = word.charCodeAt(0);
    if (word_unicode >= 65 && word_unicode <= 90) {
      word_unicode = 155 - word_unicode;
    }
    if (word_unicode >= 97 && word_unicode <= 122) {
      word_unicode = 219 - word_unicode;
    }
    reverse_words.push(String.fromCharCode(word_unicode));
  });
  return reverse_words;
}

//문자열을 배열로 변환
//리버스된 배열을 문자열로 변환
function changeWords(word) {
  let words = Array.from(word);
  let reverse_words = reverseWords(words);
  return reverse_words.join("");
}

function problem4(word) {
  if (exception(word)) {
    return "제한사항을 지켜주세요.";
  }
  return changeWords(word);
}

module.exports = problem4;
