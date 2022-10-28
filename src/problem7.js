
//유저와 친구인 배열을 리턴하는 함수
function searchFriends(user, friends){
  let user_friends = [];
  friends.map((element)=>{
    if(element[0] == user){
      user_friends.push(element[1])
    }
    if(element[1] == user){
      user_friends.push(element[0])
    }
  })
  return user_friends;
}

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
