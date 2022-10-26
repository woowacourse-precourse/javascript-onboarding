function problem6(forms){
  //같은 문자가 있는 인덱스를 가지는 배열
  let same = [];
  
  //연속된 문자와 같은 문자가 다른 유제에게 있는지 확인하는 함수
  const check=(index,string)=>{
    //현재 처음부터 현재 인덱스 바로 전까지 탐색
    for(let i=0; i<index; i++){
        if(forms[i][1].includes(string)){
            same.push(index);
            same.push(i);
        }
    }
    //현재 인덱스 다음부터 배열 끝까지 탐색
    for(let j=index+1; j<forms.length; j++){
        if(forms[j][1].includes(string)){
          same.push(index);
          same.push(j);
        }
    }
  }
  //현재 인덱스의 문자를 구하고 확인 함수에 전달
  for(let i=0; i<forms.length; i++){
    for(let j=0; j<forms[i][1].length-1; j++){
        check(i,forms[i][1][j]+forms[i][1][j+1]);
    }
  }
  //중복을 제거하기위해 set 사용 
   let result = [...new Set(same)];
   let answer =[];
   //중복을 제거한 인덱스들의 이메일을 답에 넣음
   for(let i=0; i<result.length; i++){
    answer.push(forms[result[i]][0]);
   }
   //이메일을 오름차순으로 정렬
   answer.sort();
   return answer;
}


module.exports = problem6;
