function problem6(forms) {
  var mydict = {};
  var answer = [];
  for (var i = 0; i < forms.length; i++) {
    for (var j = 0; j < forms[i][1].length - 1; j++) {
      var slice_str = forms[i][1].substring(j, j + 2);
      if (slice_str in mydict) mydict[slice_str].push(forms[i][0]);
      else mydict[slice_str] = [forms[i][0]];
    }
  }
  for (key of Object.keys(mydict)) {
    if (mydict[key].length > 1) {
      for (var i = 0; i < Object.keys(mydict[key]).length; i++) {
        answer.push(mydict[key][i]);
      }
    }
  }
  var set = new Set();
  answer.sort().forEach((item) => set.add(item));
  return [...set];
}

module.exports = problem6;
