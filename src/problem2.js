//기능 목록 작성
//1. 암호문을 배열로 저장한다.
//2. 배열을 비교해서 연속하는 같은 알파벳이 있으면 하나를 지운다.
//3. 연속하는 같은 값이 없을 때까지 반복한다.
//4. 해독된 암호문을 반환한다.

function problem2(cryptogram) {
    var answer;
    var tmp = cryptogram;
    let pwd = new Array(tmp.length);

    for (let i = 0; i < tmp.length; i++) {
        pwd[i] = tmp.substring(i, i + 1);
    }

    let length = pwd.length;

    for (let j = 0; j < length; j++) {
        for (let i = 0; i < length; i++) {
            if (pwd[i] == pwd[i + 1]) {
                pwd.splice(i, 2);
            }
        }
    }

    answer = pwd;


    return answer;
}

module.exports = problem2;