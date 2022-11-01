function problem7(user, friends, visitors) {
  const scoreSystem = require("./problem7_model/ScoreSystem").getInstance();

  //모든 유저 등록
  Array.from(new Set([user, ...friends, ...visitors].flat()))
		.forEach(scoreSystem.register);
  //모든 친구관계 등록
  friends.forEach(([user1, user2]) => scoreSystem.follow(user1, user2));
  //user의 방문자들 등록
  visitors.forEach((from) => scoreSystem.visit(from, user));
  
	return scoreSystem.recommend(user);
}

module.exports = problem7;
