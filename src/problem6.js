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

  name.forEach(function(ele, idx) {
    for(i=0; i<ele.length; i++) {
        if(i==ele.length-1) break;
            rep.push(ele.substr(i,2));   
        }
    })
  // 중복 배열 카운트
  let cntRep = {};
  rep.forEach((x) => { 
    cntRep[x] = (cntRep[x] || 0)+1; 
  });

    /* 비교 후 중복되지 않으면 키값 삭제 ///미작동///
  for (i=0; i<cntRep.length-1; i++) {
      let Nname = name[i].substring(i, i+2);
      if (cntRep.value() < 2) {
        if (cntRep.key()==Nname) {
          delete obj.key();
        }
      }
    }
  */

  let setEmail = new Set(obj.keys());
  answer = Object.values(setEmail).sort();
  
  return answer;
}

module.exports = problem6;
