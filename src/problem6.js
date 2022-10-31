function problem6(forms) {
  var answer;
  var emailSet = new Set();

  for (crew of forms){
    for (var i=0; i<crew[1].length-1; i++){
      var check = crew[1].substr(i,2);
      for (c of forms){
        if (c[1] == crew[1]){
          continue;
        }
        else if (c[1].includes(check)){
          emailSet.add(c[0]);
        }
        else{
        }
      }
    }
  }
  answer = Array.from(emailSet);
  answer.sort();

  return answer;
}

module.exports = problem6;
