function problem4(word) {
  var answer;
  var originArr = word.split("").map((each) => each.charCodeAt());
  var newArr = originArr.map((each) => {
    if (each >= 65 && each <= 90) {
      return 155 - each;
    } else if (each >= 97 && each <= 122) {
      return 219 - each;
    } else return each;
  });
  answer = String.fromCharCode(...newArr);
  return answer;
}

module.exports = problem4;
