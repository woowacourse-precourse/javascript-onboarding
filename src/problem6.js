function problem6(forms) {
  var resultEmailList = [];
  var splitNicknamesMap = new Map();

  for (var i = 0; i < forms.length; i++) {
    var splitNicknames = getSplitNicknames(forms[i][1]);

    for (var j = 0; j < splitNicknames.length; j++) {
      if (isDuplicated(splitNicknamesMap, splitNicknames[j])) {
        resultEmailList.push(
          forms[i][0],
          splitNicknamesMap.get(splitNicknames[j])
        );
        continue;
      }

      splitNicknamesMap.set(splitNicknames[j], forms[i][0]);
    }
  }

  var set = new Set(resultEmailList);
  resultEmailList = Array.from(set);

  return resultEmailList.sort();
}

function isDuplicated(splitNicknamesMap, splitNickname) {
  return splitNicknamesMap.has(splitNickname);
}

function getSplitNicknames(nickname) {
  var splitNames = [];

  for (var i = 0; i < nickname.length - 1; i++) {
    splitNames.push(nickname.substr(i, 2));
  }

  return splitNames;
}

module.exports = problem6;
