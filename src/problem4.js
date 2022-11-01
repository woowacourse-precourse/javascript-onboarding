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

    word.split('').forEach((element) => {
        if (map.has(element)) {
            answer += map.get(element);
        } else {
            answer += element;
        }
    });
    return answer;
}

module.exports = problem4;

//1. 아스키 코드에 해당되는
