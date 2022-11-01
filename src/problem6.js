function problem6(forms) {
  var answer;
  var wordCombination = (ele) => {
    var arr = ele.split("");

    sum2 = [];
    for (let k = 0; k <= arr.length - 1; k++) {
      sum2.push(arr[k] + "" + arr[k + 1]);
    }
    return sum2.filter(function (data) {
      return data.length < 3 && data.length > 1;
    });
  };

  sum3 = [];

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms.length; j++) {
      var intersection = wordCombination(forms[i][1]).filter(
        (x) => wordCombination(forms[j][1]).includes(x) //&&
        ///wordCombination(forms[j][1])
      );

      if (i != j && intersection.length !== 0) {
        sum3.push(forms[j][0]);
      }
    }
  }
  const set = new Set(sum3);
  answer = [...set].sort();

  return answer;
}

module.exports = problem6;
