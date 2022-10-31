function problem6(forms) {
  const [crewData, global] = setCrewData(forms);
  const overLapErrorList = []; //닉네임 중복된 크루들 체크할 배열 생성

  for (let crewForm of forms) {
    const [email, nickName] = crewForm;
    try {
      checkEmail(email);
      checkNickNameIsKorean(nickName);
      checkNickNameIsOverlap(nickName, crewData, global); //주어진 조건 체크
    } catch (e) {
      const { type, result, message, data } = e;

      if (type === "overLap") {
        overLapErrorList.push(data.nickName);
      } //중복되는 닉네임을 가진 크루들 배열에 저장
    }
  }

  const answer = overLapErrorList
    .map((nickName) => crewData[nickName][0])
    .sort();

  return answer;
}

/**
 * @param {string} email 확인할 이메일 주소
 * @return {{type:string, result:boolean, message:string}} Response 조건 확인 결과값.

 */

function checkEmail(email) {
  if (email.length < 11 || email.length >= 20)
    throw {
      type: "email",
      result: false,
      message: "이메일 길이를 확인해주세요",
    };

  //도메인 주소 확인
  const [id, domain] = email.split("@");
  if (domain !== "email.com")
    throw {
      type: "email",
      result: false,
      message: "@email.com 도메인을 사용하세요",
    };

  return { type: "email", result: true, message: "이메일 확인 완료" };
}

/**
 * @param {string} nickName 확인할 닉네임
 * @return {{type:string, result:boolean, message:string, data:{object}}} Response 조건 확인 결과값. 

 */
function checkNickNameIsKorean(nickName) {
  const reg = /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/;
  for (let i = 0; i < nickName.length; i++) {
    const str = nickName[i];
    if (!reg.test(str))
      throw {
        type: "nickName",
        result: false,
        message: `${i + 1}번째 글자 ${str}가 한글이 아닙니다`,
        data: { nickName: nickName },
      };
  }

  return { type: "nickName", result: true, message: "한글 닉네임 확인 완료" };
}

/**
 * @param {string} nickName 확인할 닉네임
 * @return {{type:string, result:boolean, message:string, data:{object}}} Response 조건 확인 결과값.
 */

function checkNickNameIsOverlap(nickName, crewData, global) {
  const [email, nickNameArray] = crewData[nickName];
  for (let i = 0; i < nickNameArray.length; i++) {
    const checkWord = nickNameArray[i];
    if (global[checkWord].length)
      throw {
        type: "overLap",
        result: false,
        message: "중복되는 글자가 있습니다",
        data: { overLap: checkWord, nickName },
      };
  }
  return { type: "overLap", result: true, message: "중복 확인 완료" };
}

/**
 *
 * @param {[email:string, nickName:string], {[checkWord in string] : string[]}} forms 인풋값으로 주어진 forms를 받아서, 크루 개인의 중복 아이디를 체크할 수 있는 문자열을 저장하는 새로운 data 생성
 * @returns {{ [nickName : string]:[email:string, overlapNickNameData:string[]] }} crewData 닉네임을 키값으로 이메일과 중복아이디 데이터를 가지고있는 객체 리턴
 */
function setCrewData(forms) {
  const crewData = {};
  const global = {};
  for (let i = 0; i < forms.length; i++) {
    const [email, nickName] = forms[i];
    if (!crewData[nickName]) {
      crewData[nickName] = [email];
      crewData[nickName].push(updateCrewOverlapWordChecker(nickName));
      updateGlobalOverlapWordChecker(nickName, global);
    }
  }
  return [crewData, global];
}

/**
 * @param {string} nickName  크루의 닉네임
 * @returns {string[]} overLapNickNameCheckList 닉네임을 두글자씩 나눠서 담은 배열 리턴
 */
function updateCrewOverlapWordChecker(nickName) {
  const overLapNickNameCheckList = [];

  for (let i = 0; i < nickName.length - 1; i++) {
    const checkWord = `${nickName[i]}${nickName[i + 1]}`;
    overLapNickNameCheckList.push(checkWord);
  }
  return overLapNickNameCheckList;
}

/**
 * @param {string} nickName  크루의 닉네임
 * @param {object} global 크루 전체 인원들의 중복체크 관련 데이터를 담은 오브젝트
 * @returns {} global  업데이트만 하고 리턴은 x
 */
function updateGlobalOverlapWordChecker(nickName, global) {
  for (let i = 0; i < nickName.length - 1; i++) {
    const firstChar = nickName[i];
    const secondChar = nickName[i + 1];
    const checkWord = `${firstChar}${secondChar}`;
    if (!global[checkWord]) {
      global[checkWord] = [];
    } else {
      global[checkWord].push(nickName);
    }
  }
}

module.exports = problem6;
