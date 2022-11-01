function problem6(forms) {
  let result = [];
  let filter = {};
  let len;
  let data;

  for (i = 0; i < forms.length; i++) {
    len = forms[i][1].length;

    for (j = 2; j < len; j++) {
      for (k = 0; k + j <= len; k++) {
        data = forms[i][1].slice(k, k + j);
        if (data in filter) {
          filter[data] += 1;
        } else {
          filter[data] = 1;
        }
      }
    }
  }
  for (i = 0; i < Object.keys(filter).length; i++) {
    if (Object.values(filter)[i] > 1) {
      for (j = 0; j < forms.length; j++) {
        if (forms[j][1].includes(Object.keys(filter)[i])) {
          result.push(forms[j][0]);
        }
      }
    }
  }
  result = [...new Set(result)];
  return result.sort();
}

module.exports = problem6;
