//기능 목록 작성
//1. 문자들을 닉네임 단위로 모두 비교해서 같은 값이 있으면 이메일을 반환한다.
//2. 이메일들을 전부 배열로 저장한 다음 중복값을 제거한다.
//3. 중복값이 제거된 배열을 오름차순으로 정렬한다.
//4. 중복값을 제거한 배열을 반환한다.

function problem6(forms) {
    var answer;
    let tmpforms = forms;
    let length = tmpforms.length;
    var saveData = [];
    let test1Array = [];
    let test2Array = [];
    var tmp1Array = [];
    var tmp2Array = [];

    //예외사항
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
    }

    for (let i = 0; i < length; i++) {
        tmp2Array[i] = tmpforms[i][0];
        tmp1Array[i] = tmpforms[i][1];
    }

    var tmplength = tmp1Array.length;

    for (let i = 0; i < tmplength; i++) {
        for (let j = 0; j < tmplength; j++) {
            if (i == j) {
                continue;
            }

            else if (i != j) {
                let tmp1 = tmp1Array[i];
                let tmp2 = tmp1Array[j];
                for (let l = 0; l < tmp1.length - 1; l++) {
                    for (let k = 0; k < tmp2.length - 1; k++) {
                        if (tmp1[l] == tmp2[k] && tmp1[l + 1] == tmp2[k + 1]) {
                            saveData[i] = tmp2Array[i];
                        }
                    }
                }
            }
        }
    }

    saveData.sort();
    for (let i = 0; i < saveData.length; i++) {
        if (saveData[i] == saveData[i + 1]) {
            saveData.splice(i, 1);
        }
    }

    answer = saveData;

    return answer;
}

module.exports = problem6;
