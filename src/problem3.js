function problem3(number) {
  var answer;
  let count=0;
  for(let i=0;i<=number;i++){
    let current=String(i);
    for(let j=0;j<current.length;j++){
      let x=current.charAt(j);
      if(x=='3'||x=='6'||x=='9'){
        count+=1;
      }
  }
}
  answer=count;
  return answer;
}

module.exports = problem3;
