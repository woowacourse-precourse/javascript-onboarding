function problem3(number) {
  let num ; 
  var answer=0;

  for(let u=1; u<=number; u++){
    let ustr = u.toString();

    for(let i=0; i<ustr.length; i++){
      let ch = ustr[i];
      //console.log("ASDF : " + ustr + " " + ch);
      if(ch =='3' || ch == '6' || ch =='9'){
        answer++;
      }
    }
  }

  return answer;
}

module.exports = problem3;
