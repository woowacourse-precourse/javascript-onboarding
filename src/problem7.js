const User = require("./problem7_model/User");
const {VisitorUserRelation, FriendUserRelation} = require("./problem7_model/UserRelation");

// controller (singleton)
const UserManagement = (function() {
	function init() {
		const _userTable = new Map();
		const _friendRelation = new FriendUserRelation();
		const _visitorRelation = new VisitorUserRelation();
		return {
			register(name) {
				_userTable.set(name, new User(name));
			},
			follow(from, to) {
        _friendRelation.setRelation(_userTable.get(from), _userTable.get(to));
			},
			visit(from, to) {
				_visitorRelation.setRelation(_userTable.get(from), _userTable.get(to));
			},
			recommend(name) {
				const scoreMap = _friendRelation.calculateScore(_userTable.get(name));
				for (const [user, score] of _visitorRelation.calculateScore(_userTable.get(name))) {
					scoreMap.set(user, scoreMap.get(user) + score || score);
				}
				return [...scoreMap]
					.filter(([otherUser]) => ![_userTable.get(name), ..._friendRelation.getRelations(_userTable.get(name))].includes(otherUser))
					.sort((a, b) => a[0].getName().localeCompare(b[0].getName())) //문자열 정렬
					.sort((a, b) => b[1] - a[1]) //크기 정렬
					.slice(0, 5)
					.map(([user]) => user.getName());
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
  Array.from(new Set([user, ...friends, ...visitors].flat()))
		.forEach(userManagement.register);
  //모든 친구관계 등록
  friends.forEach(([user1, user2]) => userManagement.follow(user1, user2));
  //user의 방문자들 등록
  visitors.forEach((from) => userManagement.visit(from, user));
  
	return userManagement.recommend(user);
}

module.exports = problem7;
