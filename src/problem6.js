function problem6(forms) {
  var resultEmailList = [];
  var splitNamesMap = new Map();

  for (var i = 0; i < forms.length; i++) {
    var splitNames = getSplitNames(forms[i][1]);

    for (var j = 0; j < splitNames.length; j++) {
      if (splitNamesMap.has(splitNames[j])) {
        resultEmailList.push(forms[i][0], splitNamesMap.get(splitNames[j]));
        continue;
      }

      splitNamesMap.set(splitNames[j], forms[i][0]);
    }
  }

  return resultEmailList;
}

function getSplitNames(nickname) {
  var splitNames = [];

  for (var i = 0; i < nickname.length - 1; i++) {
    splitNames.push(nickname.substr(i, 2));
  }

  return splitNames;
}

module.exports = problem6;
