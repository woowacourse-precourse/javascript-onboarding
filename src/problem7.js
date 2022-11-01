function problem7(user, friends, visitors) {
  let users = new Set();
  let score = new Map();

  let friendsObj = {};
  for(const [a,b] of friends){
    if(friendsObj[a] === undefined){
      friendsObj[a] = [];
    }
    if(friendsObj[b] === undefined){
      friendsObj[b] = [];
    }
    friendsObj[a].push(b);
    friendsObj[b].push(a);
    users.add(a);
    users.add(b);
  }

  for(u of users){
    score.set(u, 0);
  }
  score.delete(user); // 자기자신은 scroe에서 제외

  // 유저의 친구 배열
  const userFrd = friendsObj[user];

  for(let i=0;i<userFrd.length;i++){
    let fnd = userFrd[i]; // 유저의 친구
    for(let j=0;j<friendsObj[fnd].length;j++){
      let ffnd = friendsObj[fnd][j]; // 유저 친구의 친구
      if(ffnd === user) continue;
      score.set(ffnd, score.get(ffnd)+10);      
    }
  }

  for(let e of visitors){
    let now = score.get(e) || 0;
    score.set(e, now+1);
  }

  for(let e of userFrd){
    score.delete(e);
  }

  let scoreArr = [...score];
  scoreArr.sort((a,b) => {
    if(b[1] === a[1]) return (a[0]<b[0]);
    return b[1]-a[1];
  })

  let answer = [];

  let cnt = 0;
  for(scr of scoreArr){
    if(cnt > 5) break;
    if(scr[1] !== 0) {
      answer.push(scr[0]);
      cnt++;
    }
  }
  return answer;
}

module.exports = problem7;
