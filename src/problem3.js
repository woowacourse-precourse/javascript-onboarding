function problem3(number) {
	let str = "";
	let arr = ["3", "6", "9"];
	for (let i = 1; i <= number; i++) str += String(i);

	return str.split("").filter((ele) => arr.includes(ele)).length;
}

module.exports = problem3;
