function problem4(word) {
  var wordArr = [];

  wordArr = [...word].map((item) => {
    var ascii = item.charCodeAt(0);

    if (65 <= ascii && ascii <= 90) ascii = 90 - (ascii - 65);
    else if (97 <= ascii && ascii <= 122) ascii = 122 - (ascii - 97);

    return String.fromCharCode(ascii);
  });

  return wordArr.join("");
}

module.exports = problem4;

//대문자 A(65) ~ Z(90);
//소문자 a(97) ~ z(122);
