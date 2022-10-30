function problem6(forms) {
  var answer = [];
  const arr1 = [];
  const checkingArr = [];

  for (i in forms){
    const nickName = forms[i][1];
    const nickLength = nickName.length;
    const arr2 = [];
    for (let e =0 ; e < nickLength-1 ; e++){
      arr2.push(nickName.slice(e,e+2));
      checkingArr.push(nickName.slice(e,e+2));
    }
    arr1.push(arr2);
  }

  let sameArr = [];

  for (i in checkingArr){
    const r = checkingArr.filter( w => w == checkingArr[i]);
    if (1<r.length) sameArr.push(String(r[1]));
  }

  const set = new Set(sameArr);
  sameArr = [...set]
  
  for(l in sameArr){
    console.log(sameArr[l]);
    for (i in arr1){
      for (let e = 0; e < arr1[i].length ; e++){
        if( sameArr[l] == arr1[i][e]){
          answer.push(forms[i][0]);
        }
      }
    }
  }

  return answer.sort();
}

module.exports = problem6;
