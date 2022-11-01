function problem6(forms) {
  let answer=[];
  let map = new Map();

  // forms에서 닉네임 2글자씩 끊기
  for(let form of forms){
    for(let i = 0; i<form[1].length-1; i++){
      let str = form[1].substr(i, 2); // 글자 2개씩 끊어서 str에 저장
      if(!map.has(str)){ map.set(str, 1); } // 없으면 map에 value를 1로 한 key(str) 넣는다.
      else{ map.set(str, map.get(str)+1); } // 있으면 해당 key의 value를 증가시킨다
    }
  }


  return answer;
}

module.exports = problem6;
