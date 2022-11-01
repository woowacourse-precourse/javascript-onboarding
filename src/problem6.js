function problem6(forms) {
  let newName=[];
  let newNewName = [];
  let overlap = [];
  let nameCheck = [];
  let emailArr =[];

  for (element of arr) {
    let name = element[1];
    newName.push([...name]);
  }
  for (element of newName){ 
    for (let i = 0; i < 20; i++){
      if (element.slice((i),(i+2)).length > 1){
        newNewName.push(element.slice((i),(i+2)));                
      }
    }
  }
  for (element of newNewName){ 
    let elementStr = element.join('');
    let eleInclude = nameCheck.includes(elementStr);
    if (!eleInclude){
      nameCheck.push(elementStr);
    } else if (eleInclude){
      overlap.push(elementStr);
    }    
  }  


}
module.exports = problem6;
