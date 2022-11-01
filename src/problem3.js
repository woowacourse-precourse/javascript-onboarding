function problem3(number) {
  let group = [];    
  for (i=1; i<=number; i++){
    let a=i.toString().split('');
    group.push(...a);
  }
  const answer = group.filter(num => num === '3'|| num === '6'|| num === '9').length; 
  return answer;
  }
  
  module.exports = problem3;
