function problem6(forms) {
  let newName=[];
  let newNameCut = [];
  let overlap = [];
  let nameCheck = [];
  let emailArr =[];

  for (element of forms) {
    let name = element[1];
    newName.push([...name]);
  }
  for (element of newName){ 
    for (let i = 0; i < 20; i++){
      if (element.slice((i),(i+2)).length > 1){
        newNameCut.push(element.slice((i),(i+2)));                
      }
    }
  }
  for (element of newNameCut){ 
    let elementStr = element.join('');
    let eleInclude = nameCheck.includes(elementStr);
    if (!eleInclude){
      nameCheck.push(elementStr);
    } else if (eleInclude){
      overlap.push(elementStr);
    }    
  }
  let newOverlap = [...new Set(overlap)]
  
  const overlapCheck = newOverlap.toString();
  for (element of forms){
    let email = element[0];
    let name = element[1];
    if (name.indexOf(overlapCheck) != -1){
      emailArr.push(email);
    }
  }
return emailArr.sort();


}
module.exports = problem6;
