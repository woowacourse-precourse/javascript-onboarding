function checkString(num,string,arr,ans){

  for(let i = 0; i<arr.length; i++){
    if(i == num) continue;
    else{
      if(arr[i].includes(string)){
        ans.push(num);
        ans.push(i);
      }
    }
  }
}

function problem6(forms) {
  //var answer;
  let check = [];
  let answer = [];

  //비교를 위해 닉네임만 check 배열에 push
  for(let i = 0; i<forms.length; i++){
    check.push(forms[i][1]);
  }

  for(let i = 0; i<forms.length; i++){
    for(let j = 0; j<forms[i][1].length-1; j++){
      let str = forms[i][1][j] + forms[i][1][j+1]; //닉네임 두 글자로 잘라서 저장
      checkString(i, str, check, answer); //index, string, check배열, 저장할 answer배열
    }
  }

  //중복 제거
  let checking = [...new Set(answer)];
  answer = [];
  
  //중복 닉네임에 해당하는 메일 배열에 push
  for(let i = 0; i<checking.length; i++){
    answer.push(forms[checking[i]][0]);
  }

  //오름차순
  answer.sort();
  return answer;


}

module.exports = problem6;
