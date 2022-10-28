function problem4(word) {
  var result = "";
  result = "";
  let array_word = [];// 문자를 배열에
  let change_word = ["Z", "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O", "N", "M", "L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];//치환 할 알파벳
//   Map<String, String> alpha = new HashMap<>();
//   char[] alpabat = new char[26];
  let alpabat = new char[26];
  for (let i = 0; i < alpabat.length; i++) {//알파벳 for문
      alpha.put(Character.toString((char) ('A' + i)), change_word[i]);//알파벳 별로 담고 치환할꺼 까지 담기
  }
  array_word = word.split(""); //배열에 한글자씩 저장하기
  for ( let c_word of array_word) {
      let is_upp = boolean(Character.isUpperCase(c_word.charAt(0)));//대소문자 구분
      let temp_result = string(alpha.get(c_word.toUpperCase()));
      if (temp_result == null) {//null이거나, 특수문자거나 공백일때는
          temp_result = " ";
      } else if (!is_upp) {//소문자라면
          temp_result = temp_result.toLowerCase();
      }
      result = result.concat(temp_result);
  }
  return result;
}

module.exports = problem4;

