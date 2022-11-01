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


}
module.exports = problem6;
