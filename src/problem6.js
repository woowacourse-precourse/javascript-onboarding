function problem6(forms) {
  var answer = [];
  let check = {};

  for (let i = 0; i < forms.length; i++){
      var mail = forms[i][0];
      var nick = forms[i][1];

      for (let j = 0; j < nick.length; j++){
          let nickName = nick.substring(j,j+2);
          if (nickName.length >= 2 && nickName in check){
              check[nickName] += 1;
          }else if (nickName.length >= 2 ){
              check[nickName] = 1;
          }
      }

  }

  const sort_check = Object.fromEntries(
      Object.entries(check).sort(([,a],[,b]) => a > b? -1: 1 )
  );
  var first_key = Object.keys(sort_check)[0];

  for (let k = 0; k < forms.length; k++){
      check_mail = forms[k][0];
      check_nickname = forms[k][1];
      if (check_nickname.includes(first_key)){
          answer.push(check_mail);
      }
  }

  
  return answer.sort();
}



module.exports = problem6;