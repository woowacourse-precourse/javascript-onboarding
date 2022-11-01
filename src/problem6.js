function problem6(forms) {
  var answer;

  let wordSlice; 
  let obj = new Map(forms.map(([a, b]) => [a, b]));

  let setName = new Set(obj.values());
  let name = [];
  let rep = [];
  let ans = [];
  // 이름 배열
  for (let i=0; i<forms.length; i++) {
    name.push(forms[i][1]);
  }
  
  return answer;
}

module.exports = problem6;
