const User = require("./User");
const {VisitorUserRelation, FriendUserRelation} = require("./UserRelation");

// singleton
const ScoreSystem = (function() {
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
					.filter(([otherUser]) => //user자신과 친구들은 제외
						![_userTable.get(name), ..._friendRelation.getRelations(_userTable.get(name))].includes(otherUser))
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

module.exports = ScoreSystem;