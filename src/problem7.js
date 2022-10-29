const User = require("./problem7_model/User");

// singleton
const UserManagement = (function() {
	function init() {
		const _userTable = new Map();
		return {
			register(name) {
				_userTable.set(new User(name));
			},
			follow(from, to) {
        _userTable.get(from)
          .getRelation()
          .setFriend(_userTable.get(to));
			},
			visit(from, to) {
        _userTable.get(from)
          .getRelation()
          .setVisit(_userTable.get(to));
			},
			recommend(name) {
        return _userTable.get(name) //User
          .getRelation() //UserRelation
          .recommend() //Recommendation
          .stringify();
			}
		}
	}
	const instance = init();	
	return {
		getInstance() { 
			return instance;
		}
	}
})();

function problem7(user, friends, visitors) {
  const userManagement = UserManagement.getInstance();

  //모든 유저 등록
  Array.from(new Set([...user, ...friends, ...visitors].flat()))
    .forEach(userManagement.register);
  //모든 친구관계 등록
  friends.forEach(([user1, user2]) => userManagement.follow(user1, user2));
  //user의 방문자들 등록
  visitors.forEach((from) => userManagement.visit(from, user));

  return userManagement.recommend();
}

module.exports = problem7;
