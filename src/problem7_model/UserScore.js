const Recommendation = require("./Recommendation");

class UserScore {
	constructor(user) {
		this._user = user;
		this._visiters = [];
		this._friends = [];
  }
	addScore(user, relation) {
		
	}
	recommend() {
		const result = [];
		
		return new Recommendation();
	}
}

module.exports = UserScore;