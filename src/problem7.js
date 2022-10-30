function problem7(user, friends, visitors) {
  const FRIENDS_LENGTH = 2;
  const UFV_LIST = {
    user: user,
    friends: friends,
    visitors: visitors,
  }
  const FRIENDS_LIST = []
  for (let i = 0; i < UFV_LIST.friends.length; i++) {
    for (let j = 0; j < FRIENDS_LENGTH; j++) {
      if (UFV_LIST.user === UFV_LIST.friends[i][j]) {
        FRIENDS_LIST.push(UFV_LIST.friends[i][1-j]);
        UFV_LIST.friends.splice(i,1);
      }
    }
  }

  const RECOMMEND_LIST = [];
  const USER_FRIENDS = arrconvert(FRIENDS_LIST);
  for(let i=0;i<UFV_LIST.friends.length;i++){
    for (let j = 0; j < FRIENDS_LENGTH; j++) {
      if(USER_FRIENDS.indexOf(UFV_LIST.friends[i][j])>=0){
        // RECOMMEND_LIST.push(UFV_LIST.friends[i][1-j]);
        if(UFV_LIST.friends[i][1-j] in RECOMMEND_LIST){
          RECOMMEND_LIST[UFV_LIST.friends[i][1-j]]+=10;
        }
        else{
          RECOMMEND_LIST[UFV_LIST.friends[i][1-j]]=10;
        }
      };
    };
  };
  // let LAST_LIST = Object.entries(arrtoobj(RECOMMEND_LIST));

  for(let i=0;i<UFV_LIST.visitors.length;i++){
    // VISITORS_LIST.push(UFV_LIST.visitors[i]);
    if(FRIENDS_LIST.indexOf(UFV_LIST.visitors[i])>-1){
      UFV_LIST.visitors.splice(i,1);
    }
  };

  for(let i=0;i<UFV_LIST.visitors.length;i++){
    // VISITORS_LIST.push(UFV_LIST.visitors[i]);
    if(UFV_LIST.visitors[i] in RECOMMEND_LIST){
      RECOMMEND_LIST[UFV_LIST.visitors[i]]+=1;
    }
    else{
      RECOMMEND_LIST[UFV_LIST.visitors[i]]=1;
    }
  };

  // const a = Object.entries(RECOMMEND_LIST).map()
  let LAST_LIST = Object.entries(RECOMMEND_LIST).sort((a,b)=>{
    if(a[1]===b[1]){
      return a[0]-b[0];
    }
    else{
      return b[1] - a[1];
    }
  });

  return LAST_LIST.map((e)=>{
    return e[0]
  });
}

function arrconvert(list) {
  return list.reduce((acc, row) => {
      return acc.concat(row);
  });
};

function arrtoobj(list){
  return list.reduce((acc,row)=>{
    const [user,score] = row;
    acc[user]  = [...(acc[user]||[]),score];
    return acc
  },[])
}
//["andole", "jun", "bedi"]
// 사용자와 친구 dount, shakevan
// 사용자의 친구와 함께 아는 친구 andole - 20, jun - 20
// 사용자의 타임라인 방문한 사람 bedi - 3
// 사용자와 친구인 사람은 목록에서 제외 

module.exports = problem7;
