function problem6(forms) {
  var answer=[];
  let overlappingObj = makeOverlappingObj(forms)
  
  return answer;
}

function checkEmail(email){
  if(email.length<11 || email.length>=20){
    return true
  }
  let emailArr = email.split("@")
  if(emailArr.includes("email.com")){
    return true
  }
  return false
}

function makeOverlappingArr(crewName){
  let overlappingPart = []
  for (let i=0;i<crewName.length-1;i++){
    overlappingPart.push(crewName.substr(i,2))
  }
  return overlappingPart 
}




module.exports = problem6;
