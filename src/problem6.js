function problem6(forms) {
  var answer = [];
  let nameArr = split(forms);
  nameArr = findDup(nameArr);
  for(let i = 0; i<nameArr.length;i++){
    answer.push(forms[nameArr[i]][0]);
  }
  answer.sort();
  return answer;
}
function split(forms){
  let array = [];
  for(let i = 0;i<forms.length;i++){
    array.push(forms[i][1]);
  }
  return array;
}
function findDup(array){
  let result = [];
  for(let i = 1;i<array.length;i++){
    for(let j = 0;j<array[i-1].length-1;j++){
      let name = array[i-1].substr(j,2);
      for(let k = 0;k<array.length;k++){
        if(array[k].includes(name) && k!=i-1){
          result.push(k);
        }
      }
    }
  }
  const set = new Set(result);
  result = [...set];
  return result;
}
module.exports = problem6;