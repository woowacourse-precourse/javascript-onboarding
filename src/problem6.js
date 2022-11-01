function problem6(forms) {
  var answer;
  let key = new Set(); //탐색할 이름의 set
  let temp=new Array();
  let nameSet = new Array();
  
  for(let i =0;i<forms.length;i++){
    for(let j=0;j<forms[i][1].length;j++){
      if((forms[i][1].substr(j,2)).length==2) key.add(forms[i][1].substr(j,2));
    }
  }
  let arr = [...key];
 
  for(let i =0;i<arr.length;i++){
    let flag = 0 ;
    for(let j=0;j<forms.length;j++){
      if(forms[j][1].includes(arr[i])) {
        flag++;
        temp.push(forms[j][0]); //임시로 배열에 넣어두기
      }
    }
    if(flag>=2) nameSet = nameSet.concat(temp) //2명 이상이면 배열에 추가
    temp.splice(0, temp.length) //임시배열 초기화
  }
  let set= new Set(nameSet); // 중복제거
  answer =[...set].sort(); //set->array, 오름차순 정렬
  return answer;
}

module.exports = problem6;
