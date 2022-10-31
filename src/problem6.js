function problem6(forms) {
  const newForms = forms.map((arr) => ({ email: arr[0], nickname: arr[1] }));

  const duplStrArr = [];
  newForms.forEach((obj, idx) => {
    for(let i=0; i<obj.nickname.length-1; i++) {
      const str = obj.nickname[i] + obj.nickname[i+1];
      for(let j=0; j<newForms.length; j++) {
        if(j===idx) continue;
        if(newForms[j].nickname.includes(str)) {
          duplStrArr.push(newForms[j].email);
        }
      }
    }
  });
}

module.exports = problem6;