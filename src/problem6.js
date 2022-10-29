function problem6(forms) {
  var answer;
  return answer;
}
function checkNickLength(forms){
    let checkNick = forms[1];
    if(checkNick < 1 || checkNick > 20){
      return false;
    }
    return true;
  }

function checkNickKorean(forms){
  let checkNick = forms[1];
  let koreanNick =  /^[ㄱ-ㅎ|가-힣]+$/

  if(checkNick !== koreanNick){
    return false;
  }
  return true;
}

module.exports = problem6;
