function problem6(forms) {
  var answer;
  let ary = [];
  // 중복 체크
  for (crew of forms) {
    let nickname = crew[1]; //닉네임
    for (let i = 0; i < nickname.length - 1; i++) {
      let tmp = nickname[i] + nickname[i + 1];
      console.log(tmp, crew);
      let checked = false;
      for (let j = forms.indexOf(crew) + 1; j < forms.length; j++) {
        if (forms[j][1].indexOf(tmp) == -1) {
          console.log("no", forms[j], tmp, j, i);
          console.log(ary, forms);
        } else {
          console.log("yes", forms[j], tmp, j, i);
          checked = true;
          ary.push(forms[j][0]);
          forms.splice(j, 1);
          console.log(ary, forms);
          j--;
        }
      }
      if (checked) {
        ary.push(crew[0]);
        let list_index = forms.indexOf(crew);
        console.log(forms);
        forms.splice(list_index, 1);
        console.log("ary", ary);
      }
    }
  }
  ary.sort();
  return ary;
}

module.exports = problem6;
