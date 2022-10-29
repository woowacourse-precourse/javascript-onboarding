//@ts-check

const User = require("./User");

class Recommendation {  
	/**
	 * @param {Array<User>} userList
	 */
  constructor(userList) {
		this._userList = [...userList];
  }
	stringify() {
		return this._userList.map((user) => user.getName());
	}
}

module.exports = Recommendation;