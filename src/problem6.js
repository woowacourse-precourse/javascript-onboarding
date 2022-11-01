function problem6(forms) {
  var answer=[];
  let obj = makeOverlappingObj(forms)
  let overlappingWord = makeOverlappingObjToArr(obj)
    for(let crew of forms){
      if(!isAvailableEmail(crew[0]) || !isAvailableName(crew[1], overlappingWord)){
        answer.push(crew[0])
      }
    }
    return preAnswer(answer);
}

function isAvailableEmail(email){
  if(email.length<11 || email.length>=20){
    return false
  }
  let emailDomain = email.split("@")
  if(!emailDomain.includes("email.com")){
    return false
  }
  return true
}

function makeOverlappingArr(crewName){
  let overlappingArr = []
  for (let i=0;i<crewName.length-1;i++){
    overlappingArr.push(crewName.substr(i,2))
  }
  return Array.from(new Set(overlappingArr))
}

function makeOverlappingObj(forms){
  let overlappingObj={};
  for(let crew of forms){
    
    for(let word of makeOverlappingArr(crew[1])){
      if(!overlappingObj[word]){
        overlappingObj[word]=0
      }
      overlappingObj[word]+=1;
    }
  }
  return overlappingObj
}

function makeOverlappingObjToArr(obj){
  return Object.entries(obj).reduce((arr,word)=>{
    word[1]>1?arr.push(word[0]):null
    return arr},[])
}


function isAvailableName(crew, overlappingWord){
  for (let word of overlappingWord){
    if(crew.includes(word)){
      return false
    }
  }
  return true

}

function preAnswer(emailArr){
  const answer = Array.from(new Set(emailArr))
  return answer.sort()
}


module.exports = problem6;