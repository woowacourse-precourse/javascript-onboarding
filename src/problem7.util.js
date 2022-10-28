// 아는 친구 list 만들기
const getUserFriend = (user, friends) =>
  friends.filter((friend) => friend.includes(user));

// 함께 아는 친구 중 user를 제외하고 score 계산하기
const getScoreTogetherFriend = (user, friends) => {};

// 방문 user 중 친구 제거하기
const getVisitorDeleteFriend = (visitors, firends) => {};

// 방문 user 점수 계산하기
const getScoreVisitor = (visitors, score) => {};

exports.getUserFriend = getUserFriend;
exports.getScoreTogetherFriend = getScoreTogetherFriend;
exports.getVisitorDeleteFriend = getVisitorDeleteFriend;
exports.getScoreVisitor = getScoreVisitor;
