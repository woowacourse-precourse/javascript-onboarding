function problem7(user, friends, visitors) {
  var answer =[];
  var userFriends = findFriends(user, friends);
  var recmdFrd = new Map();

  for(var i = 0;i<userFriends.length; i++){ // 친구의 친구 +10
    var frdOfFrds = findFriends(userFriends[i], friends);
    frdOfFrds.forEach(frdOfFrd =>{
      if(!recmdFrd.has(frdOfFrd)){
        recmdFrd.set(frdOfFrd,10);
      }else{
        var temp = parseInt(recmdFrd.get(frdOfFrd));
        recmdFrd.set(frdOfFrd,temp+10);
      }
    })
  }
  recmdFrd.delete(user); // user는 삭제

  visitors.forEach(visitor =>{ // 방문자 +1
    if(!recmdFrd.has(visitor)){
      recmdFrd.set(visitor,1);
    }else{
      var temp = parseInt(recmdFrd.get(visitor));
      recmdFrd.set(visitor,temp+1);
    }
  })
  userFriends.forEach(userFriend =>{ // 친구는 삭제
    recmdFrd.delete(userFriend);
  })

  var sorted = Array.from(recmdFrd).sort(function(a,b){ // 정렬
    var o1 = a[1]; var o2 = b[1]; var p1 = a[0]; var p2 = b[0];
    if(o1 > o2) return -1;
    if(o1 < o2) return 1;
    if(p1 > p2) return 1;
    if(p1 < p2) return -1;
  })
  var cnt = 0;
  sorted.forEach(element =>{ // 5명까지만
    if(++cnt > 5) return;
    answer.push(element[0]);
  })

  return answer;
}

function findFriends(user, friends){
  var userFriends = [];
  for(var i = 0; i<friends.length;i++){
    if(friends[i].indexOf(user)>-1){
      var userFriend = (friends[i].indexOf(user)===0) ? friends[i][1] : friends[i][0];
      userFriends.push(userFriend);
    }
  }
  return userFriends;
}

module.exports = problem7;
