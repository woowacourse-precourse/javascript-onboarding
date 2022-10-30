function problem6(forms) {
  var answer;
  var nicknameSplit = new Map();

  for (var i = 0; i < forms.length; i++) {}
  return answer;
}

function getNameSplitArr(nickname) {
  var arr = [];

  for (var i = 0; i < nickname.length - 1; i++) {
    arr.push(nickname.substr(i, 2));
  }

  return arr;
}

module.exports = problem6;
