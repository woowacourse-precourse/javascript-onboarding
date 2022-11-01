function problem6(forms) {
  let answer = 0;

  let overlaplist = []; //이름이 중복된 사람들의 메일 담을 배열
  for (let idx = 0; idx < forms.length - 1; idx++) {
    let nickname = forms[idx][1];
    if (nickname.length == 1) {
      continue;
    }
    for (let i = 0; i < nickname.length - 1; i++) {
      let testNickname = nickname[i] + nickname[i + 1];

      let overlapchecked = false;
      for (let j = 1; j < forms.length; j++) {
        if (forms[j][1].includes(testNickname)) {
          overlaplist.push(forms[j][0]);
          forms.splice(j, 1);
          j--;
          overlapchecked = true;
        }
      }
      if (overlapchecked) {
        overlaplist.push(forms[0][0]);
        forms.splice(0, 1);
        idx--;
        break;
      }
    }
  }
  overlaplist.sort();
  console.log("overlaplist: ", overlaplist);
  return overlaplist;
}
module.exports = problem6;
