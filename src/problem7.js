function problem7(user, friends, visitors) {
  var answer;
  let map = new Map();
  let mapIndex = 0;
  let userList = [];
  mapIndex = setMap(map, mapIndex, user, friends, visitors, userList);
  let relation = new Array(mapIndex);
  let userScores = new Array(mapIndex);
  setRelation(relation, friends, map); 
  setUserScores(userScores, relation, visitors, userList, map);
  getAnswer(userScores, relation);
  sortUserScore(userScores);
  return answer;
}

function setMap(map, mapIndex, user, friends, visitors, userList){
  map.set(user, mapIndex);
  userList.push(user);
  mapIndex++;
  mapIndex = setMapFriends(map, mapIndex, friends, userList);
  mapIndex = setMapVisitors(map, mapIndex, visitors, userList);
  return mapIndex;
}

function setMapFriends(map, mapIndex, friends, userList){
  for(let i = 0; i < friends.length; i++){
    for(let j = 0; j < 2; j++){
      if(!map.has(friends[i][j])){
        map.set(friends[i][j], mapIndex);
        userList.push(friends[i][j]);
        mapIndex++;
      }
    }
  }
  return mapIndex;
}

function setMapVisitors(map, mapIndex, visitors, userList){
  for(let i = 0; i < visitors.length; i++){
    if(!map.has(visitors[i])){
      map.set(visitors[i], mapIndex);
      userList.push(visitors[i]);
      mapIndex++;
    }
  }
  return mapIndex;
}

function setRelation(relation, friends, map){
  for(let i = 0; i < relation.length; i++){
    relation[i] = new Array();
  }
  for(let i = 0; i < friends.length; i++){
    let leftNode = friends[i][0];
    let rightNode = friends[i][1];
    relation[map.get(leftNode)].push(rightNode);
    relation[map.get(rightNode)].push(leftNode);
  }
}

function setUserScores(userScores, relation, visitors, userList, map){
  initUserScores(userScores, userList);
  addFriendScore(userScores, relation, map);
  addVisitScore(userScores, visitors, map);
}

function initUserScores(userScores, userList){
  for(let i = 0; i < userList.length; i++){
    userScores[i] = {
      name: "",
      score: 0,
    };
    userScores[i].name = userList[i];
  }
}

function addFriendScore(userScores, relation, map){
  for(let i = 0; i < relation[0].length; i++){
    let friendIndex = map.get(relation[0][i]);
    for(let j = 0; j < relation[friendIndex].length; j++){
      let finalIndex = map.get(relation[friendIndex][j]);
      userScores[finalIndex].score += 10;
    }
  }
}

function addVisitScore(userScores, visitors, map){
  for(let i = 0; i < visitors.length; i++){
    let userIndex = map.get(visitors[i]);
    userScores[userIndex].score += 1;
  }
}

function getAnswer(userScores, relation){
  userScores.shift();
  delZero(userScores);
  delFriend(userScores, relation);
}

function delZero(userScores){
  for(let i = 0; i < userScores.length; i++){
    if(userScores[i].score == 0){
      userScores.splice(i, 1);
      i--;
    }
  }
}

function delFriend(userScores, relation){
  let isFriendMap = new Map();
  for(let i = 0; i < relation[0].length; i++){
    isFriendMap.set(relation[0][i], 1);
  }
  for(let i = 0; i < userScores.length; i++){
    if(isFriendMap.has(userScores[i].name)){
      userScores.splice(i, 1);
      i--;
    }
  }
}

function sortUserScore(userScores){
  userScores.sort(function (user1, user2){
    if(user1.score === user2.score){
      if(user1.name < user2.name){
        return user1;
      }
      return user2;
    }
    else{
      if(user1.score > user2.score){
        return user1;
      }
      return user2;
    }
  });
}

module.exports = problem7;
