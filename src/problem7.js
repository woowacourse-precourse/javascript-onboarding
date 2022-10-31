function problem7(user, friends, visitors) {
  let friendsList = []
  let recommend = {}

  friends.forEach(friend => {
    if(friend.includes(user)){ //user와 친구일 경우
      for(let i = 0; i < 2; i++){
        if(friend[i] != user && !friendsList.includes(friend[i])){
          friendsList.push(friend[i])
        }
      }
    }
    else{
      for(let i = 0; i < 2; i++){ //user와 친구가 아닐 경우
        if(!friendsList.includes(friend[i])){ 
          recommend[friend[i]] = 0;
        }
      }
    }
  });


  visitors.forEach(visitor => { //방문 횟수 점수 반영
    if(visitor in recommend){
      recommend[visitor] = recommend[visitor] + 1;
    }
    else{
      recommend[visitor] = 0;
    }
  });


  const temp = Object.keys(recommend);
  friends.forEach(friend => { //함께 아는 친구의 수 점수 반영
    if(friendsList.includes(friend[0]) && temp.includes(friend[1])){
      recommend[friend[1]] += 10
    }
    else if(friendsList.includes(friend[1]) && temp.includes(friend[0])){
      recommend[friend[0]] += 10
    }
  })

  temp.forEach(t => { //추천 목록에서 친구 제거
    if(friendsList.includes(t)){
      recommend[t] = -1
    }
  })

  let answerArray = [];
  temp.forEach(t => {
    answerArray.push([t, recommend[t]])
  })

  answerArray.sort(function(a, b){ //정렬
    return b[1] - a[1];
  });

  let answer = [];
  for(let i = 0; i < 5; i++){
    if(answerArray[i][1] > 0){
    answer.push(answerArray[i][0])
    }
  }
  return answer;
}

module.exports = problem7;
