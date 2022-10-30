function problem4(word) {
  var answer = new Array();

  // 알파벳을 반대로 리턴
  var lower_atoz= "abcdefghijklmnopqrstuvwxyz"

  var arr_lower_atoz = lower_atoz.split("");
  var arr_lower_ztoa = [...arr_lower_atoz].reverse();
  var arr_word = word.split("");

  // 소문자인 경우 
  for (var i = 0; i < word.length; i++) {
    var index = arr_lower_atoz.indexOf(word[i]);

    if (index == -1) {
      answer.push(arr_word[i]);
    } else {
      answer.push(arr_lower_ztoa[index]);
      console.log(answer);
    }
  }

  //기존이 대문자인 경우 다시 대문자로 변경(알파벳이 소문자로)

  return answer.join("");
}

// console.log(problem4("I love you"));
module.exports = problem4;
