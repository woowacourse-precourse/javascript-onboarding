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

}

module.exports = problem7;
