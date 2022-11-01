function problem6(forms) {
    var answer = [];
    let allList = forms;
    let emailList = [];
    let nicknameList = [];
    let nicknameDuplicateList = [];
    let emailDuplicateList = [];
    let indexList = [];
    let cnt = 0;
    //email 리스트 저장, nickname 리스트 저장
    for (let i = 0; i < allList.length; i++) {
        emailList[i] = allList[i][0].substr(0, allList[i][0].length - 10);
        nicknameList[i] = allList[i][1];
    }

    // nickname 리스트에서 연속된 문자가 있는경우 추출
    for (let i = 0; i < allList.length; i++) {
        for (let j = 0; j < allList.length; j++) {
            if (
                duplicateListChecker(
                    nicknameList[i],
                    eachStringList(nicknameList[j])
                )
            ) {
                nicknameDuplicateList.push(
                    duplicateListChecker(
                        nicknameList[i],
                        eachStringList(nicknameList[j])
                    )
                );
            } else break;
        }
    }
    // email 리스트에서 연속된 문자가 있는경우 추출
    for (let i = 0; i < allList.length; i++) {
        for (let j = 0; j < allList.length; j++) {
            if (
                duplicateListChecker(emailList[i], eachStringList(emailList[j]))
            ) {
                emailDuplicateList.push(
                    duplicateListChecker(
                        emailList[i],
                        eachStringList(emailList[j])
                    )
                );
            } else break;
        }
    }

    for (let i = 0; i < allList.length; i++) {
        for (let j = 0; j < nicknameDuplicateList.length; j++) {
            if (nicknameList[i].indexOf(nicknameDuplicateList[j]) !== -1) {
                indexList.push(i);
            }
        }
    }
    for (let i = 0; i < allList.length; i++) {
        for (let j = 0; j < emailDuplicateList.length; j++) {
            if (emailList[i].indexOf(emailDuplicateList[j]) !== -1) {
                indexList.push(i);
            }
        }
    }
    const deDuplicatedIndex = new Set(indexList);
    const deDuplicatedIndexArr = Array.from(deDuplicatedIndex);
    // deDuplicatedIndex.sort((a, b) => a - b);
    for (let i = 0; i < deDuplicatedIndexArr.length; i++) {
        answer.push(allList[deDuplicatedIndexArr[i]][0]);
    }
    return answer.sort();
    // return answer;
}

//이메일과 이름을 따로 저장 (이메일 -> @전까지만 따로 저장) -> 두글자씩 따로 저장 / 저장된 배열들을 각각 비교하여 중복된것이 있는지 체크

function eachStringList(stringList) {
    let eachStringList = [];
    for (let i = 0; i < stringList.length - 1; i++) {
        eachStringList[i] = stringList[i] + stringList[i + 1];
    }
    return eachStringList;
}

// function overlappingArrayList(stringList){
//   for(i=0;i<stringList;i++){
//     duplicateListChecker(strlist,eachStringList(''))
//   }

// }

function duplicateListChecker(stringList1, stringList2) {
    for (let i = 0; i < stringList2.length; i++) {
        if (stringList1.indexOf(stringList2[i]) !== -1) {
            return stringList1;
        }
    }
}
module.exports = problem6;
