function problem6(forms) {
  const emailArr = new Set();
  
  for (let i = 0; i < forms.length - 1; i++) {
    const [email1, nickName1] = forms[i];
    for(let j = i + 1; j < forms.length; j++) {
      const [email2, nickName2] = forms[j];
      if (duplicateNick(nickName1, nickName2)) {
        emailArr.add(email1);
        emailArr.add(email2);
      }
    }
  }

  return [...emailArr].sort();
}

function duplicateNick(nickName1, nickName2) {
  for (let i = 0; i < nickName1.length - 1; i++) {
    if(nickName2.includes(nickName1.slice(i, i + 2))) {
      return true;
    }
  }
  return false;
}



module.exports = problem6;


