// 기능 목록
// 1. 닉네임을 2글자부터 닉네임의 길이까지 나눠 조합을 생성한다.
// 2. 뒷 사람 모두를 조사하여 조합 중에 포함된 단어가 있는지 확인한다.
// 3. 만약 포함되어 있다면, 다음에 조사하지 않도록 표시해준다. 
// 4. 1-3번을 반복하여 끝까지 확인했으면, 답을 return 한다. 
// + 정답을 오름차순 정렬한다.

function problem6(forms) {
  let tf = new Array(forms.length).fill(true);
  for(let z=0; z<forms.length; z++) {
    let combi = [];

    for(let i=2; i<=forms[z][1].length; i++) {
      for(let j=0; j<=forms[z][1].length-i; j++) {
        combi.push(forms[z][1].slice(j, j+i));
      }
    }

    for(let i=z+1; i<forms.length; i++) {
      if(tf[i] && combi.some(v => forms[i][1].includes(v))) {
        tf[z] = false;
        tf[i] = false;
      }
    }
  }

  let result = [];
  for(let i=0; i<tf.length; i++) {
    if(!tf[i]) {
      result.push(forms[i][0]);
    }
  }

  return result.sort();
}

module.exports = problem6;