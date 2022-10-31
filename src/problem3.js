function problem3(number) {
  var answer = 0;

  for (let count=1; count<=number; count++) {
    var str = count.toString();

    for (let i=0; i<str.length; i++) {
      var clap = str.charAt(i);
      if (clap === "3" || clap === "6" || clap === "9") {
        answer = answer + 1;
      }
    }
  }

  return answer;
}

module.exports = problem3;
