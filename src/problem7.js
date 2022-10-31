function problem7(user, friends, visitors) {
  var answer;
  var userFriends = findFriends(user, friends);
  var recmdFrd = new Map();

  for(var i = 0;i<userFriends.length; i++){
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

  userFriends.forEach(userFriend =>{
    visitors.splice(visitors.indexOf(userFriend));
  })
  visitors.forEach(visitor =>{
    if(!recmdFrd.has(visitor)){
      recmdFrd.set(visitor,1);
    }else{
      var temp = parseInt(recmdFrd.get(visitor));
      recmdFrd.set(visitor,temp+1);
    }
  })

  answer = Array.from(recmdFrd.keys());
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
  userFriends.splice(userFriends.indexOf(user));
  return userFriends;
}

module.exports = problem7;
