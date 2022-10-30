function problem6(forms) {
  var answer = [];
  var nickName = [];
  var myObj = new Object();
  


  // 닉네임만 따로 뽑아냅니다.
  forms.forEach(element => {
    nickName.push(element[1]);
    myObj[`${element[1]}`] = element[0];
  });


  return answer;
}

module.exports = problem6;
