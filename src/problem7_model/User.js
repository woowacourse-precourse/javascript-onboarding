const UserRelation = require("./UserRelation");

class User {
  constructor(name) {
    this._name = name;
		this._relation = new UserRelation(this);
  }
	getName() {
		return this._name;
	}
	getRelation() {
		return this._relation;
	}
}

module.exports = User;