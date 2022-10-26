function problem1(pobi, crong) {
  if(isValid(pobi) || isValid(crong)) return -1;
}



function isValid(page){
  if(page[0]%2!==1 || page[1]%2!==0) return true;
  else if(page[1]!==page[0]+1) return true;
  else if(page[0]===1 || page[1]===400) return true;
  else return false;
}

module.exports = problem1;
