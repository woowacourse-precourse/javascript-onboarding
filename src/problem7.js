
//유저와 친구인 배열을 리턴하는 함수
function searchFriends(user, friends){
  let user_friends = [];
  let friends_index = [];
  friends.map((element,index)=>{
    if(element[0] == user){
      user_friends.push(element[1]);
      friends_index.push(index)
      return;
    }
    if(element[1] == user){
      user_friends.push(element[0])
      friends_index.push(index)
      return;
    }
  })

  friends_index.map((element,i)=>{

    friends.splice(element-i,1)
  })
  return [user_friends,friends];
}
//유저의 친구의 친구를 리턴하는 함수
function searchFriendsFriend(user_friends/**유저와 친구인 배열 */,friends/**유저와 친구를 거른 배열 */){
  let recommand_10 = []
  user_friends.map((user)=>{
    friends.map((element)=>{
      if(element[0] == user){
        recommand_10.push(element[1]);
        return;
      }
      if(element[1] == user){
        recommand_10.push(element[0])
        return;
      }})
  })
  return recommand_10
}

//친구추천 점수를 아이디:점수로 반환
function friendRecommandScore(recommand_10,recommand_1){
  friend_score = {};
  recommand_10.map((element)=>{
    if(friend_score.hasOwnProperty(element) == true){
      friend_score[element] = friend_score[element] + 10
    }
    if(friend_score.hasOwnProperty(element) == false){
      friend_score[element] = 10
    }

  })

  recommand_1.map((element)=>{
    if(friend_score.hasOwnProperty(element) == true){
      friend_score[element] = friend_score[element] + 1
    }
    if(friend_score.hasOwnProperty(element) == false){
      friend_score[element] = 1
    }

  })
  return friend_score
}

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
