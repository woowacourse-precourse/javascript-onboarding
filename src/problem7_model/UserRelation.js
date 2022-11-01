//@ts-check
const User = require("./User");

class UserRelation {
	constructor () {
		this._usersRelations = new Map();
	}
	_addRelation(source, target) {
		const relation = this.getRelations(source);
		relation.length ? relation.push(target) : this._usersRelations.set(source, [target]);
	}
	getRelations(user) {
		return this._usersRelations.get(user) || [];
	}
	/**
	 * @abstract
	 * @param {User} user1
	 * @param {User} user2
	 */
	setRelation(user1, user2) {}
	
	/**
	 * @abstract
	 * @param {User} user
	 */
	 calculateScore(user) {}

}

class FriendUserRelation extends UserRelation{
	constructor () {
		super();
	}
	setRelation(user1, user2) {
		this._addRelation(user1, user2);
		this._addRelation(user2, user1);
	}
	calculateScore(user) {
		const result = new Map();
		for (const relUser of this.getRelations(user)) {
			const notRelUsers = this.getRelations(relUser);
			for (const notRelUser of notRelUsers) {
				result.set(notRelUser, result.get(notRelUser) + 10 || 10);
			}
		}
		return result;
	}
}

class VisitorUserRelation extends UserRelation{
	setRelation(user1, user2) {
		this._addRelation(user2, user1);
	}
	calculateScore(user) {
		const result = new Map();
		for (const relUser of this.getRelations(user)) {
			result.set(relUser, result.get(relUser) + 1 || 1);
		}
		return result;
	}
}


module.exports = {FriendUserRelation, VisitorUserRelation};