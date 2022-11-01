function problem7(user, friends, visitors) {
  let score = {}; //점수 객체
  const relation = {}; //친구 목록 객체

  relation[user] = []; //자신의 친구 목록 생성

  //친구 목록 생성
  friends.map(el=>{
    const [user1, user2] = el;

    //각자의 친구 배열에 삽입
    if(relation[user1]) relation[user1].push(user2);
    else relation[user1] = [user2];

    if(relation[user2]) relation[user2].push(user1);
    else relation[user2] = [user1];
  })

  // 공유하는 친구의 수에 따른 점수 부여
  for(let key in relation){
    if(key !== user){
      const bothFriendCnt = relation[key].filter(el=>relation[user].includes(el)).length;
      if(bothFriendCnt){
        // 상대가 자신의 친구 중 한명이라도 친구인 상태이면
        if(score[key]) score[key] += bothFriendCnt * 10;
        else score[key] = bothFriendCnt * 10;
        // 친구 수 * 10 만큼 점수 부여
      }
    }
  }

  // 방문자들 점수 부여
  visitors.map(el=>{
    // 방문자들 횟수만큼 1점씩 부여
    if(score[el]) score[el]++;
    else score[el] = 1;
  })

  //자신의 친구들 점수 제거
  for(let key in score){
    if(relation[user].includes(key))
      delete score[key]
  }

  // 본인 점수 제거
  delete score[user] 

  const result = Object.entries(score) // 점수 객체 배열로 변환
                  .sort((a,b)=> (a > b) - (a < b)) // 이름 순으로 정렬
                  .sort((a,b)=>b[1]-a[1]).map(el=>el[0]) // 점수 순으로 정렬

  return result.length > 5 ? result.splice(0,5) : result // 5명 이상이라면 5명까지 반환
}

module.exports = problem7;
