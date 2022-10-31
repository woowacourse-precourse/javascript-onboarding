const User = require("./problem7_model/User");
const {VisitorUserRelation, FriendUserRelation} = require("./problem7_model/UserRelation");
const ScoreSystem = require("./problem7_model/ScoreSystem");

// controller (singleton)
const UserManagement = (function() {
	function init() {
		const _userTable = new Map();
		const _friendRelation = new FriendUserRelation();
		const _visitorRelation = new VisitorUserRelation();
		const _scoreSystem = new ScoreSystem;
		_scoreSystem.mountUserRelation(_friendRelation);
		_scoreSystem.mountUserRelation(_visitorRelation);
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
				_scoreSystem.recommend(_userTable.get(name));
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
  userManagement.recommend(user);
}

problem7(
	"mrko",
	[
		["donut", "andole"],
		["donut", "jun"],
		["donut", "mrko"],
		["shakevan", "andole"],
		["shakevan", "jun"],
		["shakevan", "mrko"],
	],
	["bedi", "bedi", "donut", "bedi", "shakevan"]
);

module.exports = problem7;
