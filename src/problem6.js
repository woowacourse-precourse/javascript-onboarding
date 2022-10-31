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


}

module.exports = problem6;
