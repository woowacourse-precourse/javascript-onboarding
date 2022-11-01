function problem6(forms) {
  var answer = [];
  answer = forms.reduce((acc, cur, index) => {
    var curLen = cur[1].split("").length; //제 //이 //엠
    if (answer.indexOf(cur[1]) < 0) {
      for (var k = index + 1; k < forms.length; k++) {
        for (var i = 0; i < curLen; i++) {
          for (var j = i + 2; j < curLen - i + 1; j++) {
            if (forms[k][1].indexOf(cur[1].substring(i, j)) > -1) {
              stop = true;
              if (acc.indexOf(cur[1]) < 0) {
                acc.push(cur[1]);
              }
              if (acc.indexOf(forms[k][1]) < 0) {
                acc.push(forms[k][1]);
              }
              break;
            }
          }
          if (stop) {
            break;
          }
        }
      }
      return acc;
    }
  }, []);
  var tmp = forms.reduce((acc, cur) => {
    console.log(cur, cur[1]);
    if (answer.includes(cur[1])) {
      acc.push(cur[0].toString());
    }
    return acc;
  }, []);
  console.log(tmp);
  return tmp.sort();
}

module.exports = problem6;
