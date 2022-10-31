function problem6(forms) {
  var answer;
  let nicknames = new Array(forms.length);
  let dupNicknames = new Array(0);
  for (var i = 0; i < forms.length; i++) {
    nicknames[i] = forms[i][1];
  }
  for (var i = 0; i < nicknames.length - 1; i++) {
    var nick1 = nicknames[i].split("");
    // console.log(nick1 + "\n");
    for (var j = i + 1; j < nicknames.length; j++) {
      var nick2 = nicknames[j].split("");
      // console.log(nick2);
      for (var k = 0; k < nick1.length - 1; k++) {
        var char = nick1[k];
        var idx = nick2.indexOf(char);

        if (idx > -1 && idx < nick1.length - 1 && idx < nick2.length - 1) {
          if (nick1[k + 1] === nick2[idx + 1]) {
            // console.log(idx);
            // console.log(nick1[idx + 1], nick2[idx + 1]);
            dupNicknames.push(forms[i][0]);
            dupNicknames.push(forms[j][0]);
            // console.log(forms[i][0], forms[j][0]);
          }
        }
      }
    }
  }
  answer = [...new Set(dupNicknames)];
  answer.sort();
  return answer;
}

// let forms = [
//   ["jm@email.com", "제이엠"],
//   ["jason@email.com", "제이슨"],
//   ["woniee@email.com", "워니"],
//   ["mj@email.com", "엠제이"],
//   ["nowm@email.com", "이제엠"],
// ];
// console.log(problem6(forms));
module.exports = problem6;
