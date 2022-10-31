function problem6(forms) {
  
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


