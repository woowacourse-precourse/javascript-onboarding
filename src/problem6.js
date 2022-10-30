function returnSimilarName(forms){
  let nameCheckBox = {};
  let emailCheckBox = {};

  forms.forEach(userArray => {
    const userEmail = userArray[0];
    const userName = userArray[1];
    let userUnitName = '';
    let preUserName = '';
    let preUserEmail = '';

    isValidValue(userName, userEmail);

    for(let i = 0; i < userName.length - 1; i++){
      userUnitName = userName[i] + userName[i+1];
      if(userUnitName in nameCheckBox){
        preUserName = nameCheckBox[userUnitName][0]
        preUserEmail = nameCheckBox[userUnitName][1]

        emailCheckBox[preUserEmail] = preUserName;
        emailCheckBox[userEmail] = userName;
      }
      else{
        nameCheckBox[userUnitName] = [userName, userEmail];
      }
    }
  });
  return emailCheckBox;
}

function isValidValue(name, email){
  const regex = /^[ㄱ-ㅎ|가-힣]{1,19}$/;
  if(regex.test(name)){
    console.log(name);
  }
}

function problem6(forms) {
  console.log(returnSimilarName(forms));
}

problem6([["jm@email.com", "제이엠"],
["jason@email.com", "제이슨"], 
["woniee@email.com", "워니"], 
["mj@email.com", "엠제이"], 
["nowm@email.com", "이제엠"]]);

module.exports = problem6;

