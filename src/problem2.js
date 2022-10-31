function problem2(cryptogram) {
  var answer = "";
  var ans = cryptogram.split("");
  for (var i = 0; i < ans.length; i++) {
    if (ans[i] === ans[i + 1]) {
      ans.splice(i + 1, 1);
      ans.splice(i, 1);
      i = -1;
      console.log(ans);
    }
  }
  answer = ans.join("");

  return answer;
}

module.exports = problem2;
console.log(problem2("browoanoommnaon"));
console.log(problem2("zyelleyz"));
