function problem7(user, friends, visitors) {
  var answer;

  const friendsListGetter = (finder) => {

    const friendsList = [];

    friends.map(friend => {
      if(friend.indexOf(finder) !== -1) {
        friendsList.push(friend[1-friend.indexOf(finder)]);
      }
    })

    return friendsList;
  };

  const userFriendsListGetter = (user) => {

    const userFriendsList = friendsListGetter(user);

    return userFriendsList;
  }

  const friendOfFriendListGetter = (userFriendsList) => {

    const friendOfFriendList = [];

    userFriendsList.map(friend => {
      friendList = friendsListGetter(friend);
      friendList.map(friend => {
        if(friend !== user) {
          friendOfFriendList.push(friend);
        }
      })
    })

    return friendOfFriendList;
  };

  const noFriendVisitorCollector =(visitors, userFriendsList) => {
    
    const onlyVisitor =[];

    visitors.map(visitor => {
      if(userFriendsList.indexOf(visitor) === -1){
        onlyVisitor.push(visitor);
      }
    })

    return onlyVisitor;
  };

  const scorer = (list, score, recommendUserObj) => {

    list.map(person => {
      recommendUserObj[person] = recommendUserObj[person] === undefined ? score : recommendUserObj[person] + score;
    });
  };

  const recommendTotalScorer = (friendOfFriendList, visitors) => {

    const recommendUserObj = {};

    scorer(friendOfFriendList, 10, recommendUserObj);
    scorer(visitors, 1, recommendUserObj);

    return recommendUserObj;
  };

  const recommendUserListGetter = recommendUserObj => {
    const recommendUserList = [];

    for(const recommendUser in recommendUserObj) {
      recommendUserList.push({name : recommendUser, recommendScore : recommendUserObj[recommendUser]});
    }

    return recommendUserList;
  }

  const listSorter = (recommendUserList, recommendCount) => {
    
    const finalRecommnedList = [];
    
    recommendUserList.sort((a,b) => {
      if(a.recommendScore < b.recommendScore) {
        return 1;
      }
      if(a.recommendScore > b.recommendScore) {
        return -1;
      }
      if(a.recommendScore === b.recommendScore) {
        if(a.name > b.name) {
          return 1;
        }
        if(a.name < b.name) {
          return -1;
        }
      }
    })

    for(let i=0; i<recommendCount; i++){
      if(recommendUserList[i] !== undefined){
        finalRecommnedList.push(recommendUserList[i].name);  
      }
    }

    return finalRecommnedList;
  }

  const recommendUserCount = 5;

  const userFriendsList = userFriendsListGetter(user);
  const friendOfFriendList = friendOfFriendListGetter(userFriendsList);
  const onlyVisitorList = noFriendVisitorCollector(visitors, userFriendsList);
  const recommendUserObj = recommendTotalScorer(friendOfFriendList, onlyVisitorList);
  const recommendUserList = recommendUserListGetter(recommendUserObj);
  const finalRecommnedList = listSorter(recommendUserList, recommendUserCount);

  answer = finalRecommnedList;

  return answer;
}

module.exports = problem7;
