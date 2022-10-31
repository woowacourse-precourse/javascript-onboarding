const UserRelation = require("./UserRelation");

class User {
  constructor(name) {
    this._name = name;
  }
	getName() {
		return this._name;
	}
}

module.exports = User;