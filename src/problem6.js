function problem6(forms) {
  var answer = [];
  var email = forms.map(x=>x[0]);
  var name = forms.map(x=>x[1]);
  
  var nameArr = [];
  var nameArr2 = [];

  for(var i=0; i<name.length; i++) {
      for(var j=0; j<name[i].length; j++) {
          nameArr.push(name[i].slice(j,j+2));
      }
  }
  nameArr = nameArr.filter(x => x.length > 1);
  nameArr.sort();

  for(var i=0; i<nameArr.length; i++) {
      if(nameArr[i] === nameArr[i+1]) {
          i = i+1;
          nameArr2.push(nameArr[i]);
      }
  }

  for(var i=0; i<email.length; i++) {
      for(var j=0; j<nameArr2.length; j++) {
          if(name[i].includes(nameArr2[j])) {
              answer.push(email[i]);
          }
      }
  }

  answer = answer.sort();

  return answer;
}

module.exports = problem6;
