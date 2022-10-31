//기능 목록 작성
//1. 알파벳을 한 글자마다 배열로 저장한다.
//2. 아스키코드 숫자로 변환한 후 청개구리가 말한 아스키코드 값으로 변환한다.
//3. 청개구리가 말한 아스키코드값을 다시 영어로 변환한다.
//4. answer을 return한다.

function problem4(word) {
    var answer;
    let tmpword = word;
    let tmpArray = tmpword.split("");

    if (word.length < 1 || word.length > 10000) {
        answer = "1 이상 10000이하의 문자열만을 입력하시오";
    }

    else {
        for (let i = 0; i < tmpArray.length; i++) {
            if (tmpArray[i] == ' ') {
                tmpArray[i] = ' ';
            }
            else {
                tmpArray[i] = tmpword.charCodeAt(i);
                let tmpNum = tmpArray[i];

                //소문자 변환
                if (tmpNum >= 97 && tmpNum <= 122) {
                    let tmpCount2 = 219 - tmpNum;
                    tmpArray[i] = String.fromCharCode(tmpCount2);
                }

                //대문자 변환
                if (tmpNum >= 65 && tmpNum <= 90) {
                    let tmpCount = 155 - tmpNum;
                    tmpArray[i] = String.fromCharCode(tmpCount);
                }
            }
        }
        answer = tmpArray.join('');
    }
    return answer;
}
module.exports = problem4;