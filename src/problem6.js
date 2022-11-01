const getSearchArr = (forms) => { // 닉네임을 연속된 두 글자로 자른 배열 형태로 저장 ex) '제이엠' => ['제이', '이엠']
  return forms.map(([_, nickname]) => [...nickname]).map(item => { 
    if(item.length === 1) return [];

    let array = [];
    for(let i = 0; i < item.length - 1; i++){
      array.push(item[i] + item[i + 1]);
    }
    return array;
  })
}

const getIndexArr = (nicknameArr, searchArr) => { // nicknameArr에서 searchArr로 탐색하여 중복 닉네임 인덱스 구함
  let arr = [];
  let shiftIndex = 0;
  searchArr.forEach((item, index) => {
    nicknameArr.shift();
    shiftIndex++;
    nicknameArr.forEach((element, codeIndex) => { 
      item.forEach(str => {
        if(element.includes(str)){
          arr.push(index);
          arr.push(codeIndex + shiftIndex);
        }
      });
    });
  });
  return [...new Set(arr)];   
}

function problem6(forms) {
  const emailArr = forms.map(([email, _]) => email);
  const nicknameArr = forms.map(([_, nickname]) => nickname);
  const searchArr = getSearchArr(forms);
  const indexArr = getIndexArr(nicknameArr, searchArr);
  
  let answer = emailArr.filter((_, index) => indexArr.includes(index));
  answer = [...new Set(answer)].sort();
  return answer;
}

module.exports = problem6;
