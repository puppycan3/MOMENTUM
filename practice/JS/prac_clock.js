// clock 요소 불러오기
const clock = document.getElementById("clock");

// date 객체 생성후 각 시분초 를 문자로 가공한뒤
// 2자리가 안되는 시간은 앞자리에 0을 붙여서 2자리로 만들어서 clock에 넣어준다
function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, 0);
  const minutes = String(date.getMinutes()).padStart(2, 0);
  //   const seconds = String(date.getSeconds()).padStart(2, 0);
  clock.innerText = `${hour}:${minutes}`;
}

// 페이지가 열리자마자 getClock 바로 실행 + setInterval함수로 1초마다 getClock함수를 구동시킨다
getClock();
setInterval(getClock, 1000);
