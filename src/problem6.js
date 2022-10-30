function problem6(forms) {
  var resultEmailList = [];
  var nicknameSplitMap = new Map();

  for (var i = 0; i < forms.length; i++) {
    var nameSplitStrings = getSplitStrings(forms[i][1]);

    for (var j = 0; j < nameSplitArr.length; j++) {}

    return resultEmailList;
  }
}

function getSplitStrings(nickname) {
  var arr = [];

  for (var i = 0; i < nickname.length - 1; i++) {
    arr.push(nickname.substr(i, 2));
  }

  return arr;
}

module.exports = problem6;
