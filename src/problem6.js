function problem6(forms) {
  let answer = new Set();
  let repeat = new Set();
  let name_dic = {};
  for (let i=0; i < forms.length; i++) {
    let name = forms[i][1];
    for (let j=0; j < name.length - 1; j++) {
      if (name.length != 1) {
        if (name.slice(j,j+2) in name_dic) {
          name_dic[name.slice(j,j+2)].push(i);
        }
        else {
          name_dic[name.slice(j,j+2)] = [i]
        }
      }
    }
  }

  
  return answer;
}

module.exports = problem6;
