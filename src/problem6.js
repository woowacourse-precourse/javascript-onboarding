function problem6(forms) {
  
  let formArray = [];
  formArray = searchName(forms);
  let formArrayAfter = []
  formArrayAfter = formArrayWord(formArray,forms).split(",");
  let duplicate = duplicatefc(formArrayAfter);
  // console.log("duplicate : " ,duplicate);
  //index반환;
  let result= [[]];
  let count=0;

  if(duplicate == "") return;

  for(let i = 0;i<forms.length;i++ ){//이안에 제이 있으면 index반환 
    // console.log(forms[i][1]);
    if(forms[i][1].includes(duplicate) == true){
      result[count++] = forms[i][0];
      result = result.sort();
      // console.log("result : ",result);
    }
  }
  return result;

}

function searchName (forms){
  let result = [];
  for(let i =0;i< forms.length;i++){
    result += forms[i][1]+ ",";
  }
  return result;
}
function formArrayWord(formArray,forms){
  let result = [];
  for(let i = 0; i < formArray.length;i++){
    for(let j = forms[1][1].length ; j < formArray.length;j++){//제이슨부터 시작 
      if( formArray[i]== formArray[j]){//첫글자가 같고
        if( formArray[i+1]== formArray[j+1]){//두번째 글자도 같으면 
          let afterWord = formArray[i]+formArray[i+1];//두단어를 합쳐서
          if(afterWord.includes(",")) continue;// 콤마를빼고
          result += afterWord+",";
        }
      }
    }
  }
  return result;
}
function duplicatefc(formArrayAfter){
  let duplicate = [];
  for(let i = 0;i < formArrayAfter.length; i++){
    if(duplicate.includes(formArrayAfter[i])==true){
      console.log("중복",formArrayAfter[i]);
      return formArrayAfter[i];
    }
    duplicate += formArrayAfter[i]+" ";
  }
}
input =[
  [ 
      ["jm@email.com", "제이엠"],
      ["jason@email.com", "제이슨"],
      ["woniee@email.com", "워니"],
      ["mj@email.com", "엠제이"],
      ["nowm@email.com", "이제엠"],
  ] 
]
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${problem6(input[i])}`);
}

module.exports = problem6;