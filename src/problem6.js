function problem6(forms) {
  //중복 체크
  //중복이란? : 두 글자 이상 문자가 연속적으로 순서에 맞추어 포함되어 있는 경우 
  //두 글자 이상 중복이면 -> 어차피 두 글자 중복을 포함하고 있는것 -> 글자를 두개씩 짝지어서 판단해도 ok

  const map = new Map(); //{두 글자 : [해당 글자를 포함하는 크루 인덱스]} 저장하는 map 자료구조

  //1. 각 크루의 닉네임에서 두 글자씩 묶은 글자를 key로 설정
  //해당 key를 닉네임에 가지고 있는 크루의 인덱스를 value 배열에 추가
  forms.forEach((crew, index) => {
    const nickname = crew[1]; //이번 크루의 닉네임
    for(let i = 0; i < nickname.length - 1; i++){
      const key = nickname[i] + nickname[i + 1]; //key : 닉네임을 두 글자로 묶은 것

      //이미 등장한 글자라면
      if(map.has(key)){
        const prev = map.get(key);
        map.set(key, prev.concat(index));
      }
      //처음 등장한 글자라면
      else{
        map.set(key, [index]);
      }
    }
  })

  //2. 중복 크루 찾기 : 각 key의 value 배열이 길이가 2 이상이면 중복 발생 -> set에 추가 (중복 제거 위해 set 이용)
  const set = new Set(); //중복 글자를 포함하는 크루 이메일을 저장할 set 자료구조
  for(let value of map.values()){
    if(value.length >= 2){
      value.forEach((v) => set.add(forms[v][0]));
    }
  }

  //3. 닉네임 오름차순 정렬을 위해 set을 array로 변환, 정렬 수행
  const answer = Array.from(set);
  answer.sort((a,b) => {
    if(a < b) return -1;
    else if(a > b) return 1;
    else return 0;
  })

  return answer;
}

module.exports = problem6;
