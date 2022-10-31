//내 친구 목록 생성 함수
const makeMyFriends = (friends, user, myFriends) =>{
    
  for(let friend of friends){
    if (friend.includes(user)) {
      myFriends.push(
        friend[Math.abs(friend.indexOf(user)-1)]
        );
    }
  }
};

//나와 함께 아는 친구 목록 생성
const makeMyFriendsKnow = (user, myFriends, friends, userFriendTogether) =>{

  for(let user_friend of myFriends){
    for(let friend of friends){
      const newFriendIndex = Math.abs(friend.indexOf(user_friend)-1);
      if ((friend.includes(user_friend)) &&
          (!friend[newFriendIndex].includes(user))) {
            userFriendTogether.push(
              friend[newFriendIndex]
            );
      }
    }
  }
};

}

module.exports = problem7;
