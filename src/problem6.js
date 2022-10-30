//예외사항
function exception(forms) {
  let crew_total_number = forms.length;
  if (crew_total_number < 1 || crew_total_number > 10000) return true;
  return false;
}

//이메일 유효성 검사
function checkEmailValidity(forms) {
  let email_validity = new RegExp("[a-z0-9]+@email.com");
  let suitable_email_crews = [];
  forms.map((crew) => {
    let email = crew[0];
    if (email.length < 11 || email.length > 20) return;
    if (email_validity.test(email) == false) return;
    suitable_email_crews.push(crew);
  });
  return suitable_email_crews;
}

//닉네임 한글 검사
function checkNicknameKorean(forms) {
  let check_nickname_korean = new RegExp("^[가-힣]*$");
  let korean_nickname_crews = [];
  forms.map((crew) => {
    let nickname = crew[1];
    if (nickname.length < 1 || nickname.length > 20) return;
    if (check_nickname_korean.test(nickname) == false) return;
    korean_nickname_crews.push(crew);
  });
  return korean_nickname_crews;
}

//연속되는 두글자 추출
function checkOverlapWord(forms) {
  let split_words = [];
  forms.map((crew) => {
    let nickname = crew[1];
    for (i = 0; i < nickname.length - 1; i++) {
      split_words.push(nickname.substr(i, 2));
    }
  });
  let overlap_words = split_words.filter(
    (overlap_word, index) => split_words.indexOf(overlap_word) != index
  );
  overlap_words = new Set(overlap_words);
  overlap_words = [...overlap_words];
  return overlap_words;
}

//중복된 크루원 이메일 추출 후 정렬
function searchOverlapCrewEmail(forms, overlap_words) {
  let overlap_crew_emails = [];
  forms.map((crew) => {
    overlap_words.map((overlap_word) => {
      if (crew[1].indexOf(overlap_word) != -1)
        overlap_crew_emails.push(crew[0]);
    });
  });
  overlap_crew_emails = overlap_crew_emails.sort();
  return overlap_crew_emails;
}

function problem6(forms) {
  if(exception(forms)) return "제한사항을 지켜주세요.";
  let exact_crews = checkNicknameKorean(forms);
  exact_crews = checkEmailValidity(exact_crews);
  let overlap_words = checkOverlapWord(forms);
  return searchOverlapCrewEmail(exact_crews, overlap_words);
}

module.exports = problem6;
