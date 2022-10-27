function problem7(user, friends, visitors) {
  var answer;
  let map = new Map();
  let mapIndex = 0;
  setMap(map, mapIndex, user, friends, visitors);
  return answer;
}

function setMap(map, mapIndex, user, friends, visitors){
  map.set(user, mapIndex);
  mapIndex++;
  mapIndex = setMapFriends(map, mapIndex, friends);
  mapIndex = setMapVisitors(map, mapIndex, visitors);
}

function setMapFriends(map, mapIndex, friends){
  for(let i = 0; i < friends.length; i++){
    for(let j = 0; j < 2; j++){
      if(!map.has(friends[i][j])){
        map.set(friends[i][j], mapIndex);
        mapIndex++;
      }
    }
  }
  return mapIndex;
}

function setMapVisitors(map, mapIndex, visitors){
  for(let i = 0; i < visitors.length; i++){
    if(!map.has(visitors[i])){
      map.set(visitors[i], mapIndex);
      mapIndex++;
    }
  }
  return mapIndex;
}

module.exports = problem7;
