function problem7(user, friends, visitors) {
  var answer;

  isUser = except(user, friends);
  scoreList = score_10(isUser, friends, user);
  friendRank = give10Score(scoreList);

  for(i = 0; i < visitors.length; i++) {
    for(j = 0; j < isUser.length; j++) {
      if(visitors[i] == isUser[j]){
        visitors.splice(i, 1);
      }
    }
  }

  visitorRank = visitorScore(visitors, friendRank);
  answer = sortMap(visitorRank);
  return Array.from(answer.keys());
}

function except(user, friends){
  let userfriend = [];

  //friends에 user인 mrko가 있는지 없는지 판단
  for(i = 0; i < friends.length; i++){  //바깥쪽 배열의 길이(friends.length)
    for(j = 0; j < 2; j++){ //안쪽 배열의 길이(2)
      //있으면 다른 한명의 이름을 가져옴
      if(friends[i][j] == user){
        if(j==0){
          userfriend.push(friends[i][1]);
        }
        else{
          userfriend.push(friends[i][0]);
        }
      }
    }
  }
  return userfriend;
}

//mrko의 친구의 친구 탐색한 후, 10점 부여
function score_10(userfriend, friends, user){
  let rank = [];

  for(i = 0; i < friends.length; i++){
    for(j = 0; j < 2; j++){
      for(k = 0; k < userfriend.length; k++){
        if(friends[i][j] == userfriend[k]){
          if(j==0){
            if(friends[i][1] != user) 
              rank.push(friends[i][1]);
          }else{
            if(friends[i][0] != user)
              rank.push(friends[i][0]);
          }
        }
      }
    }
  }
  return rank;
}

function give10Score(scoreList) {
  var rankMap = new Map();
  for(i = 0; i < scoreList.length; i++){
    if(rankMap.has(scoreList[i])){
      rankMap.set(scoreList[i], rankMap.get(scoreList[i]) + 10);
    } else {
      rankMap.set(scoreList[i], 10);
    }
  }
  return rankMap;
}

//방문자 명단에서 mrko와 mrko 친구 제외하고 1점씩 부여
function visitorScore(visitors, rankMap){
  for(i = 0; i < visitors.length; i++){
    if(rankMap.has(visitors[i])){
      rankMap.set(visitors[i], rankMap.get(visitors[i]) + 1);
    } else {
      rankMap.set(visitors[i], 1);
    }
  }
  return rankMap;
}

//점수와 이름을 오름차순으로 정렬
function sortMap(rankMap) {
  const mapSortByKey = new Map([...rankMap.entries()].sort()); //key값 기준 오름차순정렬
  console.log(rankMap);
  const mapSortByValue = new Map([...mapSortByKey.entries()].sort((a, b) => b[1] - a[1])); //value값 기준 오름차순정렬
  return mapSortByValue;
}

module.exports = problem7;
