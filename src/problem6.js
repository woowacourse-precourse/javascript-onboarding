function problem6(forms) {
  var answer=[];
    for(let crew of forms){
      if(checkEmail(crew[0]) || checkName(crew[1], forms)){
        answer.push(crew[0])
      }
    }
    return preAnswer(answer);
}

function checkEmail(email){
  if(email.length<11 || email.length>=20){
    return true
  }
  let emailDomain = email.split("@")
  if(!emailDomain.includes("email.com")){
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
      if(!overlappingObj[word]){
        overlappingObj[word]=0
      }
      overlappingObj[word]+=1;
    }
  }
  return overlappingObj
}

function checkName(crew, forms){
  let overlappingObj = makeOverlappingObj(forms)
  for (let name of makeOverlappingArr(crew)){
    if(overlappingObj[name]>1){
      return true
    }
  }
  return false
}

function preAnswer(emailArr){
  const answer =[... new Set(emailArr)]
  return answer.sort()
}


module.exports = problem6;
