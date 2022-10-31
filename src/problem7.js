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

//10점 짜리 계산
const calculateTen = (userFriendTogether, myFriends, score) =>{
  
  for(let ten_user of userFriendTogether){
    if (!myFriends.includes(ten_user)) {
      if (!score[ten_user]) {
        score[ten_user] = 0;
      }
        score[ten_user] += 10;
    } 
  }
};

}

module.exports = problem7;
