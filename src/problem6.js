//기능 목록 작성
//1. 문자들을 닉네임 단위로 모두 비교해서 같은 값이 있으면 이메일을 반환한다.
//2. 이메일들을 전부 배열로 저장한 다음 중복값을 제거한다.
//3. 중복값이 제거된 배열을 오름차순으로 정렬한다.
//4. 중복값을 제거한 배열을 반환한다.

function problem6(forms) {
    var answer;
    let tmpforms = forms;
    let length = tmpforms.length;

    if (length < 1 || length > 10000) {
        answer = '크루원은 1명 이상 10000명 이하여야 합니다';
    }

    for (let i = 0; i < length; i++) {
        if (tmpforms[i][0].length < 11 || tmpforms[i][0].length > 20) {
            answer = '이메일 주소는 11자 이상 20자 이하여야 합니다.';
        }
        let emailAddress = tmpforms[i][0];
        let tmpArray2 = emailAddress.split(/[@]/);
        if (tmpArray2[1] != 'email.com') {
            answer = '도메인은 email.com만 가능합니다.';
        }

        let tmpArray[i][0] = tmpforms[i][1];
    }

    return answer;
}

module.exports = problem6;
