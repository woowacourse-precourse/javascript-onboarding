function problem6(forms) {
  var answer;


  overlap_email = [];
  for(let i=0; i<forms.length; i++){
    for(let j=0; j<forms.length; j++){
      if(i <= j)
        continue;
      if (IsOverlap(forms[i][1], forms[j][1])){
        overlap_email.push(forms[i][0]);
        overlap_email.push(forms[j][0]);
      }
    }
  }

  overlap_email = Array.from(new Set(overlap_email));;
  overlap_email.sort();

  return overlap_email;
}

//두개의 문자열을 입력값으로, 서로 중복되는 문자열 패턴이 있을경우 true값을, 없을경우 false값을 반환
function IsOverlap(str1, str2){
  
  let pattern;
  let is_overlap = false;
  
  for(let i=1; i<str1.length; i++){
    
    pattern = str1[i-1] + str1[i];    

    if(str2.includes(pattern)){
      is_overlap = true;
      break;
    }
  }
  return is_overlap;
}

module.exports = problem6;
