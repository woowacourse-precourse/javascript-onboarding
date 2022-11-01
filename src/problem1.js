function makevalue(Leftnumber, Rightnumber){
  Case1L = 0;
  Case2L = 0;
  Case1R = 1;
  Case2R = 1;
  BiggerCaseL = 0;
  BiggerCaseR = 0;
  Biggest = 0;

  for(let i=0; i<Leftnumber.length; i++){
    Case1L+= Leftnumber[i]*1;
    Case2L*= Leftnumber[i]*1;
  }
  for(let i=0; i<Rightnumber.length; i++){
    Case1R+= Rightnumber[i]*1;
    Case2R*= Rightnumber[i]*1;
  }
  BiggerCaseL = Math.max(Case1L,Case2L);
  BiggerCaseR = Math.max(Case1R,Case2R);
  Biggest = Math.max(BiggerCaseL,BiggerCaseR);
  return Biggest;
}

function problem1(pobi, crong) {
  let pobiLeftnumber = String(pobi[0]);
  let pobiRightnumber = String(pobi[1]);
  let crongLeftnumber = String(crong[0]);
  let crongRightnumber = String(crong[1]);
  let pobiBiggest = 0;
  let crongBiggest = 0;

  if( (pobiRightnumber-pobiLeftnumber)!==1 || (crongRightnumber-crongLeftnumber)!==1 || pobiLeftnumber>pobiRightnumber || crongLeftnumber>crongRightnumber || pobiLeftnumber<=0 || crongLeftnumber<=0 || pobiRightnumber>400 || crongRightnumber>400 ){
    answer = -1;
    return answer;
  }

  pobiBiggest = makevalue(pobiLeftnumber, pobiRightnumber);
  crongBiggest = makevalue(crongLeftnumber, crongRightnumber);
 
  var answer;
  
  if (pobiBiggest>crongBiggest) {
    answer = 1;
  }
  else if (pobiBiggest<crongBiggest) {
    answer = 2;
  }
  else if (pobiBiggest===crongBiggest) {
    answer = 0;
  }
  console.log(answer);
  return answer;
}

module.exports = problem1;
