function problem4(word) {
    var answer = '';

    var map = new Map();

    let reverse = 90;
    for (let i = 65; i <= 90; i++) {
        map.set(String.fromCharCode(i), String.fromCharCode(reverse--));
    }

    reverse = 122;
    for (let i = 97; i <= 122; i++) {
        map.set(String.fromCharCode(i), String.fromCharCode(reverse--));
    }
}

module.exports = problem4;

//1. 아스키 코드에 해당되는
