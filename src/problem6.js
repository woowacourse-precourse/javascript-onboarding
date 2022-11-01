//입력값 = [[이메일, 닉네임]...]

//닉네임에 중복된 글자가 있는 크루의 이메일을 출력함
//두글자 이상의 문자가 연속적으로 
//순서에 맞게 포함되어 있는 경우 중복처리

//[이메일,닉네임]의 길이는 2
//크루는 1명 이상 10000명 이하
//이메일은 이메일형식에 부합, (이부분은 정규표현식으로)
//전체 길이 11자 이상 20자 미만
//신청할 수 있는 이메일은 email.com으로 제한
//닉네임은 한글만 가능하고 전체길이 1-19
//result는 문자열을 오름차순으로 sort함

function exceptForm(forms = [[]]) {
  //크루 1-10000
  if (forms.length < 1 || 10000 < forms.length) {
    console.log('크루인원이 1미만 10000이상');
    return -1;
  }
  return 0;
}

function exceptCrew(crew = ['', '']) {
  //crew 길이 2

  if (crew.length != 2) {
    console.log('crew배열의 길이가 2가 아님');
    return -1;
  }
  //이메일 제한
  //\w는 숫자 영어 _를 의미
  let emailReg = /[\w\.\-]+\@email.com/g;
  //console.log(crew[0].match(emailReg));
  if (crew[0].match(emailReg) == null) {
    console.log('이메일 오류');
    return -1;
  }
  //닉네임 제한
  let nickReg = /[ㄱ-ㅎ가-힣]/g;
  if (crew[1].match(nickReg) == null) {
    console.log('닉네임 오류');
    return -1;
  }

  return 0;
}

//중복 검색용 함수
//두글자뽑아서 다른 닉네임과 정규표현식으로 비교한다
function compareNick(nick = ['', ''], compareCrew = ['', '']) {
  for (let i = 0; i < nick[1].length - 1; i++) {
    let reg = new RegExp(nick[1][i] + nick[1][i + 1]);
    if (compareCrew[1].match(reg) != null) {
      return [nick[0], compareCrew[0]];
    }
  }
  return [0, 0];
}

//실행함수
function action(forms = [[]]) {
  let overlap = [];
  for (let i = 0; i < forms.length; i++) {
    let crew = forms[i];
    let count = 0;
    //crew = [이메일, 닉네임]
    if (exceptCrew(crew) == -1) {
      return -1;
    }

    for (let j = i + 1; j < forms.length; j++) {
      let [a, b] = compareNick(forms[i], forms[j]);
      if (a != 0 || b != 0) {
        overlap.push(b);
        count++;
        if (count < 2) {
          //a는 한번만 넣는다
          overlap.push(a);
        }
        console.log(overlap);
      }
    }
  }
  //set으로 바꾸면 중복제거가 된다.
  overlap = [...new Set(overlap)];
  //sort
  overlap.sort();
  return overlap;
}

function problem6(forms = [[]]) {
  var answer;

  let eForm = exceptForm(forms);
  if (eForm == -1) {
    return -1;
  }

  for (let crew of forms) {
    if (exceptCrew(crew) == -1) {
      return -1;
    }
  }

  answer = action(forms);
  return answer;
}


module.exports = problem6;
