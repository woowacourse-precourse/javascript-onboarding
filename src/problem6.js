function problem6(forms) {
  let result = [];
  const nickDict = {};  // 두 글자씩 잘라서 dict에 담기
  const mailDict = {};  // 메일 정보 dict
  forms.forEach(form => {
    nickDict[form[1]] = {};
    for(let i=0;i<form[1].length-1;i++){
      nickDict[form[1]][form[1].slice(i,i+2)] = 1;
    }
    mailDict[form[1]] = form[0];
  })

  const res = Object.keys(nickDict).map(curr => {
    let check = false;
    for(let i=0;i<curr.length-1;i++){
      if (Object.keys(nickDict).some(comp => {
        if(curr == comp) return false;
        return nickDict[comp][curr.slice(i,i+2)]
      })){
        check = true;
        break;
      }
    }
    return [curr, check] 
  })

  res.forEach(crew => {
    if(crew[1]){
      result.push(mailDict[crew[0]])
    }
  })
  tempSet = new Set(result);
  result = [...tempSet];
  return result.sort();
}

module.exports = problem6;
