function problem6(forms) {
  const emailArr = forms.map(([email, _]) => email);
  let codeArr = forms.map(([_, nickname]) => [...nickname].map(item => item.charCodeAt(0)).join('')); // 닉네임 유니코드로 변경
  let searchArr = forms.map(([_, nickname]) => [...nickname].map(item => String(item.charCodeAt(0)))); // 닉네임을 한 글자씩 유니코드로 변경하여 배열에 저장
  searchArr = searchArr.map(item => { // 닉네임을 연속된 두 글자로 자른 배열 형태로 저장 ex) '제이엠' => ['제이', '이엠']
    if(item.length === 1) return [];

    let array = [];
    for(let i = 0; i < item.length - 1; i++){
      array.push(item[i] + item[i + 1]);
    }
    return array;
  })

  let indexArr = [];
  let shiftIndex = 0;
  searchArr.forEach((item, index) => {
    codeArr.shift();
    shiftIndex++;
    codeArr.forEach((element, codeIndex) => { 
      item.forEach(str => {
        if(element.includes(str)){
          indexArr.push(index);
          indexArr.push(codeIndex + shiftIndex);
        }
      })
    })
  })
  
  const uniqueArr = [...new Set(indexArr)];
  let answer = emailArr.filter((_, index) => uniqueArr.includes(index));
  answer = [...new Set(answer)].sort();
  return answer;
}

module.exports = problem6;
