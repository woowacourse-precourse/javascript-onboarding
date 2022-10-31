function problem6(forms) {
  const MINIMUM_SPLIT_UNIT = 2;

  var resultEmailList = [];
  var splitNicknamesMap = new Map();
  var splitNicknames, nickName, email;

  for (var i = 0; i < forms.length; i++) {
    email = forms[i][0];
    nickName = forms[i][1];

    splitNicknames = getSplitNicknames(nickName);

    for (var j = 0; j < splitNicknames.length; j++) {
      if (isDuplicated(splitNicknamesMap, splitNicknames[j])) {
        resultEmailList.push(email, splitNicknamesMap.get(splitNicknames[j]));
        continue;
      }

      splitNicknamesMap.set(splitNicknames[j], email);
    }
  }

  var set = new Set(resultEmailList);
  resultEmailList = convertSetToArray(set);
  sortedByResult = sortedByArray(resultEmailList);

  return sortedByResult;
}

function sortedByArray(arr) {
  return arr.sort();
}

function convertSetToArray(set) {
  return Array.from(set);
}

function isDuplicated(splitNicknamesMap, splitNickname) {
  return splitNicknamesMap.has(splitNickname);
}

function getSplitNicknames(nickname) {
  var splitNames = [];

  for (var i = 0; i < nickname.length - 1; i++) {
    splitNames.push(nickname.substr(i, MINIMUM_SPLIT_UNIT));
  }

  return splitNames;
}

module.exports = problem6;
