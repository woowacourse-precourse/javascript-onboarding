function problem3(number) {
  var answer;
  return answer;
}

module.exports = problem3;

/*
메서드 : 객체를 정의할 때 프로퍼티 값으로 함수를 선언하는 것으로 만들 수 있음
const bigtop = {
  satHi: function() {
    console.log('Hi');
  }
};

const bigtop = {
  satHi: () => {
    console.log('Hi');
  }
};

const bigtop = {
  satHi () {
    console.log('Hi');
  }
};

const bigtop = {};
bigtop.sayHi = function () {
  console.log('Hi');
};

메서드 호출
bittop.sayHi();
bigtop.satHi;
bigtop["sayHi"]();
bigtop["sayHi"];
bigtop["sayHi"()];
bigtop[sayHi()];

*/