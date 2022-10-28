
function problem1(pobi, crong) {
  let isRestrictions = false;
  
  if(pobi.length!==2 || crong.length!==2){
    isRestrictions = true;
  } else if(pobi.includes(1)||pobi.includes(400)||crong.includes(1)||crong.includes(400)){
    isRestrictions = true;
  } else if(pobi[1]-pobi[0]!==1 || crong[1]-crong[0]!==1){
    isRestrictions = true;
  }

  if (isRestrictions){
    return -1;
  } 
  else {
    
  }
}

module.exports = problem1;
