function problem7(user, friends, visitors) {
  var answer;
  let map = new Map();
  let mapIndex = 0;
  setMap(map, mapIndex, user, friends, visitors);
  return answer;
}

function setMap(map, mapIndex, user, friends, visitors){
  map.set(user);
  mapIndex++;
  setMapFriends(map, mapIndex, friends);
  setMapVisitors(map, mapIndex, visitors);
}

function setMapFriends(map, mapIndex, friends){
  for(let i = 0; i < friends.length; i++){
    for(let j = 0; j < 2; j++){
      if(!map.has(friends[i][j])){
        map.set(friends[i][j]);
        mapIndex++;
      }
    }
  }
}

module.exports = problem7;
