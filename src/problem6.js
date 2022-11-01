function problem6(forms) {
  let emailSet = new Set();
  
  for (let crewIndex=0; crewIndex<forms.length-1; crewIndex++){
    const crew = forms[crewIndex];
    const email = crew[0];
    const nickname = crew[1];
    
    for(let i=0; i<nickname.length-1; i++){
      const lengthOfSplit = 2;
      const word = nickname.substr(i, lengthOfSplit);
      
      for (let anotherCrewIndex=crewIndex+1; anotherCrewIndex<forms.length; anotherCrewIndex++){
        const anotherCrew = forms[anotherCrewIndex];
        const comparedEmail = anotherCrew[0];
        const comparedNickname = anotherCrew[1];

        const isIncluded = comparedNickname.includes(word);

        if(isIncluded){
          emailSet.add(email);
          emailSet.add(comparedEmail);
        }
      }
    }
  }
  
  let answer = Array.from(emailSet);
  answer.sort();
  return answer;
}

module.exports = problem6;
