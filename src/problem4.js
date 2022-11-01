function problem4(word) {
  var answer;

  const origin_big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const origin_small = "abcdefghijklmnopqrstuvwxyz"
  const new_big = "ZYXWVUTSRQPONMLKJIHGFEDCBA"
  const new_small = "zyxwvutsrqponmlkjihgfedcba"

  // 기존 문자가 담긴 배열과 청개구리 사전의 배열 생성
  // 입력한 값을 분리하여 하나씩 대조한 뒤 변경
  const word_arr = [];

  function turn_word(word) {
    for(let i=0; i<word.length; i++) {
      for(let j=0; j<origin_big.length; j++) {
        if(word[i] == origin_big[j]) {
          word_arr.push(new_big[j]);
        } else if(word[i] == origin_small[j]) {
          word_arr.push(new_small[j]);
        }
      }
      if(word[i] == " ") {
        word_arr.push(" ");
      }
    }
    return word_arr.join("");
  }

  const result = turn_word(word);

  answer = result;
  return answer;
}

module.exports = problem4;
