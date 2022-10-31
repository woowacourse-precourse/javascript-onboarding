function problem6(forms) {
  // 닉네임만 따로 배열에 담아둠
  let nickNames = forms.map((e) => e[1]);
  // 닉네임을 나눠서 Set을 사용해 중복제거를 한뒤 겹치는 닉네임만
  // overlap변수에 담아둠 ["제","이","엠"]
  let newArr = forms.map((e) => e[1].split(""));
  let makeSet = new Set(...newArr);
  let overlap = [...makeSet];
  // 중복된 값이 들어가지 않게 하기위해 idx를 Set으로 선언
  let idx = new Set();
  let result = [];
  for (let i = 0; i < overlap.length - 1; i++) {
    // 조건에 2글자 이상 -> "제이" "이엠" 이런식으로 word에 담고
    // 따로 빼둔 닉네임 배열이 word를 포함하고 있으면 idx에 값 삽입
    let word = overlap[i] + overlap[i + 1];
    for (let j = 0; j < nickNames.length; j++) {
      if (nickNames[j].includes(word)) {
        idx.add(j);
      }
    }
    word = "";
  }
  [...idx].forEach((e) => {
    result.push(forms[e][0]);
  });
  return result.sort();
}


module.exports = problem6;
