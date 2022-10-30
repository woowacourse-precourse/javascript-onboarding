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
  return result;
}

module.exports = problem6;
