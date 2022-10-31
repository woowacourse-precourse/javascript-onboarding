function exception(user, friends, visitors) {
  if (user.length < 1 || user.length > 30) return true;
  if (friends.length < 1 || friends.length > 10000) return true;
  if (visitors < 0 || visitors > 10000) return true;
  friends.map((friend) => {
    if (friend.length != 2) return true;
    friend.map((id) => {
      if (id.length < 1 || id.length > 30) return true;
    });
  });
  let check_user_id = new RegExp("^[a-z]*$");
  if (check_user_id.test(user) == false) return true;
  return false;
}

//유저와 친구인 배열을 리턴하는 함수
function searchFriends(user, friends) {
  let user_friends = [];
  let user_friend_indexs = [];
  friends.map((friend, index) => {
    if (friend[0] == user) {
      user_friends.push(friend[1]);
      user_friend_indexs.push(index);
      return;
    }
    if (friend[1] == user) {
      user_friends.push(friend[0]);
      user_friend_indexs.push(index);
      return;
    }
  });
  friends = deleteUserFriends(user_friend_indexs, friends);
  return [user_friends, friends];
}

function deleteUserFriends(user_friend_indexs, friends) {
  user_friend_indexs.map((user_friend_index, index) => {
    friends.splice(user_friend_index - index, 1);
  });
  return friends;
}

//방문기록에서 친구 제외
function notFriendVisitors(visitors, user_friends) {
  let not_friend_visitors = [...visitors];
  user_friends.map((user_friend) => {
    not_friend_visitors = not_friend_visitors.filter((visitor) => {
      return visitor != user_friend;
    });
  });
  return not_friend_visitors;
}

//유저의 친구의 친구를 리턴하는 함수
function searchFriendOfFriends(user_friends, friends) {
  let friend_of_friends = [];
  user_friends.map((user_friend) => {
    friends.map((friend) => {
      if (friend[0] == user_friend) {
        friend_of_friends.push(friend[1]);
        return;
      }
      if (friend[1] == user_friend) {
        friend_of_friends.push(friend[0]);
        return;
      }
    });
  });
  return friend_of_friends;
}

//친구추천 점수를 {아이디:점수}로 반환
function friendRecommandScore(friend_of_friends, not_friend_visitors) {
  let friend_recommand_scores = {};
  friend_of_friends.map((friend_of_friend) => {
    if (friend_recommand_scores.hasOwnProperty(friend_of_friend) == true) {
      friend_recommand_scores[friend_of_friend] =
        friend_recommand_scores[friend_of_friend] + 10;
    }
    if (friend_recommand_scores.hasOwnProperty(friend_of_friend) == false) {
      friend_recommand_scores[friend_of_friend] = 10;
    }
  });

  not_friend_visitors.map((not_friend_visitor) => {
    if (friend_recommand_scores.hasOwnProperty(not_friend_visitor) == true) {
      friend_recommand_scores[not_friend_visitor] =
        friend_recommand_scores[not_friend_visitor] + 1;
    }
    if (friend_recommand_scores.hasOwnProperty(not_friend_visitor) == false) {
      friend_recommand_scores[not_friend_visitor] = 1;
    }
  });
  return friend_recommand_scores;
}

//친구추천 객첵를 이름순으로 정렬
function sortFriendRecommand(friend_recommand) {
  /**오브젝트 정렬
   * sort(([a,],[b,])) 이름순으로 정렬
   * sort(([,a],[,b])) 점수순 내림차순 정렬
   */
  let sort_friend_recommand = Object.entries(friend_recommand)
    .sort(([id_1], [id_2]) => id_1 - id_2)
    .reduce(
      (sort_recommand, [id, score]) => ({ ...sort_recommand, [id]: score }),
      {}
    );
  return sort_friend_recommand;
}

//추천 친구 배열을 리턴하는 함수
function friendRecommand(friend_recommand) {
  let recommand_friends = [];
  let friend_recommand_scores = Object.values(friend_recommand);
  friend_recommand_scores = friend_recommand_scores.sort((score_1, score_2) => {
    return score_2 - score_1;
  });

  if (friend_recommand_scores.length > 5) {
    friend_recommand_scores = friend_recommand_scores.slice(0, 5);
  }

  friend_recommand_scores.map((friend_recommand_score) => {
    let friend_recommand_id = Object.keys(friend_recommand).find(
      (recommand_id) => friend_recommand[recommand_id] == friend_recommand_score
    );
    recommand_friends.push(friend_recommand_id);
    friend_recommand[friend_recommand_id] = 0;
  });
  return recommand_friends;
}

function problem7(user, friends, visitors) {
  if (exception(user, friends, visitors)) return "제한사항을 지켜주세요.";
  let search_friends_result = searchFriends(user, friends); //user의 친구와 user의 친구를 제외한 친구목록
  let user_friends = search_friends_result[0]; //user의 친구 배열
  friends = search_friends_result[1]; // user를 제외한 친구 배열
  let friend_of_friends = searchFriendOfFriends(user_friends, friends); //친구의 친구(10점) 배열
  let not_friend_visitors = notFriendVisitors(visitors, user_friends); // 방문기록에서 친구 제외 배열
  let friend_recommand = friendRecommandScore(
    friend_of_friends,
    not_friend_visitors
  ); //{추천친구 : 점수} 오브젝트
  friend_recommand = sortFriendRecommand(friend_recommand); //추천친구 오브젝트 이름순 정렬
  return friendRecommand(friend_recommand);
}

module.exports = problem7;
