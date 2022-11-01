function isSubString(name1, name2){
  if(name1.length < 2) {
    return 0;
  }
  for(let i=0;i<name2.length-1; i++){
    let subStr = name2.substring(i, i+2);
    if(name1.indexOf(subStr) !== -1) return 1;
  }
  return 0;
}

function problem6(forms) {
  let answer = [];
  const len = forms.length;
  let chk = new Array(len+1).fill(0);

  for(let i=0;i<len;i++){
    let name1 = forms[i][1];
    for(let j=0;j<len;j++){
      if(i===j) continue;
      let name2 = forms[j][1];
      let rst = name1.length > name2.length ? isSubString(name1,name2) : isSubString(name2, name1);
      chk[j] += rst;
      chk[i] += rst;
    }
  }

  for(let i=0;i<len;i++){
    if(chk[i]>0) answer.push(forms[i][0]);
  }

  answer.sort();

  return answer;

}

module.exports = problem6;
