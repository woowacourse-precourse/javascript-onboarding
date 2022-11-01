function returnSimilarName(forms){
  let nameCheckBox = {};
  let emailReturnBox = {};

  forms.forEach(userArray => {
    const userEmail = userArray[0];
    const userName = userArray[1];
    let nameTmpCheckBox = {};
    let userUnitName = '';
    let preUserName = '';
    let preUserEmail = '';

    if(!(isValidValue(userName, userEmail))){
      emailReturnBox[userEmail] = userName;
    }

    for(let i = 0; i < userName.length - 1; i++){
      userUnitName = userName[i] + userName[i+1];
      if(userUnitName in nameCheckBox){
        preUserName = nameCheckBox[userUnitName][0]
        preUserEmail = nameCheckBox[userUnitName][1]

        emailReturnBox[preUserEmail] = preUserName;
        emailReturnBox[userEmail] = userName;
      }
      else{
        nameTmpCheckBox[userUnitName] = [userName, userEmail]
      }
    }
    nameCheckBox = {...nameCheckBox, ...nameTmpCheckBox};
  });
  return emailReturnBox;
}

function isValidValue(name, email){
  const regexName = /^[ㄱ-ㅎ|가-힣]{1,19}$/;
  const regexEmail = new RegExp('^[a-z0-9]+@email.com+$');
  let valid = false;

  if(regexName.test(name) && regexEmail.test(email)){
    valid = true; 
  }
  return valid;
}

function problem6(forms) {
  let resultEmailArray = Object.keys(returnSimilarName(forms));
  resultEmailArray.sort(); 

  return resultEmailArray;
}

console.log(problem6([["jm@email.com", "유소정소정소정"],
["jason@email.com", "제이슨"], 
["woniee@email.com", "워니"], 
["mj@email.com", "엠제이"], 
["nowm@email.com", "이제엠"]]));

module.exports = problem6;

