function problem4(word) {
  var answer = new Array();

  // 알파벳을 반대로 리턴
  var lower_atoz= "abcdefghijklmnopqrstuvwxyz"

  var arr_lower_atoz = lower_atoz.split("");
  var arr_lower_ztoa = [...arr_lower_atoz].reverse();
  var arr_word = word.split("");

  var arr_upper_atoz = lower_atoz.toUpperCase().split("");
  var arr_upper_ztoa = [...arr_upper_atoz].reverse();
  var arr_word = word.split("");


  for (var i = 0; i < word.length; i++) {
    str = arr_word[i].toUpperCase();
    var lower_index = arr_lower_atoz.indexOf(word[i]);
    var upper_index = arr_upper_atoz.indexOf(word[i]);

    // 대문자인 경우 
    if(str === word[i] && upper_index != -1) {
      answer.push(arr_upper_ztoa[upper_index]);
    // 공백인 경우
    } else if(lower_index === -1 && upper_index === -1) {
      answer.push(arr_word[i]);

    // 소문자인 경우
    } else {
      answer.push(arr_lower_ztoa[lower_index]);
    } 
  }
  return answer.join("");
}
module.exports = problem4;
