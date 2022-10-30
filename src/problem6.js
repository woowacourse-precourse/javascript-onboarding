function problem6(forms) {
  let nameCheckBox = {};
  let emailCheckBox = {};

  forms.forEach(userArray => {
    const userEmail = userArray[0];
    let userName = userArray[1];
    let userUnitName = '';

    for(let i = 0; i < userName.length - 1; i++){
      userUnitName = userName[i] + userName[i+1]
    }
  });
  console.log(nameCheckBox);
}

problem6([["jm@email.com", "제이엠"],
["jason@email.com", "제이슨"], 
["woniee@email.com", "워니"], 
["mj@email.com", "엠제이"], 
["nowm@email.com", "이제엠"]]);

module.exports = problem6;

