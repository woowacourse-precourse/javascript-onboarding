function problem7(user, friends, visitors) {
  try{
    //친구 관계 그래프 생성 (이름 : [친구 리스트])
    const graph = new Map();
    graph.set(user, []);

    friends.forEach((friend) => {
      const [a, b] = friend;
      if(graph.has(a)) graph.set(a, graph.get(a).concat(b));
      else graph.set(a, [b]);

      if(graph.has(b)) graph.set(b, graph.get(b).concat(a));
      else graph.set(b, [a]);
    })

    //recommend : {이름 : 추천 점수}
    let recommend = new Map();
    //사용자와 함께 아는 친구 수 만큼 10점 추가
    graph.get(user).forEach((friend) => {
      //사용자의 친구의 친구 모두 10점씩 추가
      graph.get(friend).forEach((f) => {
        if(f !== user) recommend.set(f, 10 + (recommend.get(f) || 0))
      });
    })
    //타임라인 방문 횟수마다 1점씩 추가
    visitors.forEach((visitor) => {
      recommend.set(visitor, 1 + (recommend.get(visitor) || 0));
    })

    //이미 사용자와 친구인 유저는 제외
    graph.get(user).forEach((friend) => {
      recommend.delete(friend);
    })

    recommend = Array.from(recommend);
    //점수 내림차순 정렬, 같으면 이름순 정렬
    recommend.sort((a,b) => {
      if(a[1] !== b[1]) return b[1] - a[1];
      else{
        if(a[0] < b[0]) return -1;
        else if(a[0] > b[0]) return 1;
        else return 0;
      }
    })
    
    const answer = [];
    for(let i = 0; i < recommend.length; i++){
      answer.push(recommend[i][0])
      if(answer.length === 5) break;
    }
    
    return answer;

  }
  catch(e){
    return e;
  }
}

module.exports = problem7;
