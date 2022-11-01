let nameSet = [];

function problem6(forms) {
  makeNameSet(forms);
  const partSet = makePartSet();
  const answer = returnEmail(forms, compare(partSet));
  answer.sort();
  return answer;
}
// 이름만 저장된 배열을 만드는 함수
function makeNameSet(forms) {
  for(let i=0; i<forms.length; i++) {
    nameSet.push(forms[i][1]);
  }
}

// makePart 함수를 통해 만든 부분문자를 배열에 저장하는 함수
function makePartSet() {
  let partSet = [];
  for(let i=0; i<nameSet.length; i++) {
    let subPart = makePart(nameSet[i]);
    partSet.push(subPart);
  }
  return partSet;
}

// 입력받은 문자의 부분문자열을 만드는 함수
function makePart(str) {
  let part = [];
  for(let i=0; i<str.length; i++) {
    let word = str.charAt(i);
    for(let j = i+1; j<str.length; j++) {
      word += str.charAt(j);
      part.push(word);
    }
  }
  return part;
}

// 인자로 받은 두 배열에 교집합 요소가 있는지 확인하는 함수
function isOverlab(partArr1, partArr2) {
  let overlab = partArr1.filter(str => partArr2.includes(str));
  if(overlab.length == 0) {
    return false;
  } else {
    return true;
  }
}

// isOverlab 함수를 통해 두 배열을 비교하고 교집합이 발생하는 배열의 index를 저장하는 함수
function compare(partSet) {
  let idx = [];
  for(let i=0; i<partSet.length; i++) {
    for(let j=i+1; j<partSet.length; j++) {
      if(isOverlab(partSet[i], partSet[j])) {
        idx.push(i);
        idx.push(j);
      }
    }
  }
  return idx;
}

// 입력받은 form과 idx를 통해 이메일을 반환하는 함수
function returnEmail(form, idx) {
  const set = new Set(idx);
  let email = [];
  const index = [...set];
  for(let i=0; i<index.length; i++) {
    email.push(form[index[i]][0]);
  }
  return email;
}
module.exports = problem6;
