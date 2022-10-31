function problem7(user, friends, visitors) {
  const relation = {}; //친구 목록 객체
  let score = {}; //점수 객체

  friends.map(el=>{
    const [user1, user2] = el;

    //친구 목록에 삽입
    if(relation[user1])
      relation[user1].push(user2);
    else relation[user1] = [user2];

    if(relation[user2])
      relation[user2].push(user1);
    else relation[user2] = [user1];
  })

  // 자신의 친구가 존재하는 경우
  if(relation[user]){
    for(let key in relation){
      if(key !== user) //자신의 친구 목록 제외
        relation[key] = relation[key].filter(el=>{
          return relation[user].includes(el) === false && el !== user
        }); //자신과 자신의 친구 삭제
    }
  }

  for(let key in relation){
    if(key !== user){
      relation[key].map(el=>{
        if(score[el]) score[el] += 10;
        else score[el] = 10;
      }) // 남은 친구들은 자신의 친구의 친구이기 때문에 10점씩 부여
    }
  }
  visitors.map(el=>{
    // 방문자들 횟수만큼 1점씩 부여
    if(score[el]) score[el]++;
    else score[el] = 1;
  })

  for(let key in score){
    // 자신의 친구들 점수 제거
    if(relation[user].includes(key))
      delete score[key]
  }

  const result = Object.entries(score) // 점수 객체 배열로 변환
                  .sort((a,b)=> (a > b) - (a < b)) // 이름 순으로 정렬
                  .sort((a,b)=>b[1]-a[1]).map(el=>el[0]) // 점수 순으로 정렬

  return result.length > 5 ? result.splice(0,5) : result // 5명 이상이라면 5명까지 반환
}

module.exports = problem7;
