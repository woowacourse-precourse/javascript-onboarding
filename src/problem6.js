const unique = (value, index, self) => {
  return self.indexOf(value) === index
}

function compareNicknames(first, second){ 
//두개의 닉네임이 중복되는지 확인하기
//두글자씩만 확인하기
  var first_split = first.split('');
  var second_split = second.split('');
  for(p =0;p<first_split.length-1;p++){
    var candidate = first_split[p]+first_split[p+1];
    for(k=0;k<second_split.length-1;k++){
      var target = second_split[k]+second_split[k+1];
      if (candidate == target){
        return true;
      }
    }
  }
  return false;
}

function problem6(forms){
  
  var answer = [];
  var nicknames = [];
  var checklist = [];

  //getnickname
  for (i =0;i<forms.length;i++){
    nicknames.push(forms[i][1]);
    //checklist 만들기
    checklist.push(false);
  }
  
  // 두 닉네임의 조합으로 비교하기
  // 크루가 한명일 때는 제외

  if (forms.length > 1){
  for (i=0;i<nicknames.length -1;i++){
    if ((checklist[i]==false) && (nicknames[i].length>1)){
      for(j = i+1;j<nicknames.length;j++){
        if ((checklist[j]==false) && (nicknames[j].length>1)){

           if (compareNicknames(nicknames[i], nicknames[j]) == true){
              // if (compareNicknames == 0){
            checklist[i] = true;
            checklist[j] = true;
            answer.push(forms[i][0]);
            answer.push(forms[j][0]);
           }
        }
      }
    }
  }
}

  answer.sort();
  const uniqueAnswer = answer.filter(unique);
  return uniqueAnswer;
}

// problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]);

module.exports = problem6;
