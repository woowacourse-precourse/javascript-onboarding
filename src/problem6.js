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

function makeOverlappingObj(forms){
  let overlappingObj={};
  for(let crew of forms){
    let wordArr = makeOverlappingArr(crew[1]);
    
    for(let word of wordArr){
      !overlappingObj[word]?overlappingObj[word]=1: overlappingObj[word]+=1;
    }
  }
  return overlappingObj
}
 




module.exports = problem6;
