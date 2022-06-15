// form input greeting 요소 불러오기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.getElementById("greeting");

// .hidden { display : none; }
const CLASSNAME_HIDDEN = "hidden";

// localStorage name
const USERNAME_KEY = "username";

// localStorage에 저장된 유저이름 가져오기
const SAVED_USERNAME = localStorage.getItem(USERNAME_KEY);

// 로그인 이벤트 : 제출이벤트 실행시 새로고침 방지 + localStorage key와 value 저장
// loginForm의 클래스이름 "hidden" 추가해서 화면에서 지우기 + paintGreeting함수 호출
// loginInput.value의 값을 넣어서 paintGreeting함수 실행
function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(CLASSNAME_HIDDEN);
  paintGreeting(username);
}

// greeting에 loginInput.value 나 SAVED_USERNAME이 들어가고
// 클래스 hidden 제거해서 화면에 노출시킨다.
function paintGreeting(username) {
  greeting.innerText = `안녕하세요 ${username} 님`;
  greeting.classList.remove(CLASSNAME_HIDDEN);
}

// localStorage 에 저장된 유저이름이 없으면 loginForm의 클래스리스트 중에서 hidden 삭제
// 그리고 loginForm에 submit 이벤트가 실행될때 onLoginSubmit 함수 실행한다
if (SAVED_USERNAME === null) {
  loginForm.classList.remove(CLASSNAME_HIDDEN);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(SAVED_USERNAME);
}
