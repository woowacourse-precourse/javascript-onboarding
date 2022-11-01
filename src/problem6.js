function problem6(forms) {

    answer=new Array();
  
   let checkList = [];
   forms.map((elements) => {
    nickName = elements[1];
  
    for(i =0; i<nickName.length-1; i++) {
      checkList.push(nickName.substr(i,2))
    }
   })
  
   let arr = checkList.filter((element, index) => checkList.indexOf(element) != index);
   arr = new Set(arr);
   arr = [...arr]
   return arr;
  
  }
 
  module.exports = problem6;