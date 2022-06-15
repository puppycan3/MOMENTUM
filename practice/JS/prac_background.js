// 파일 이름 배열
const images = ["0.jpg", "1.jpg", "2.jpg"];

// img 태그 생성
const img = document.createElement("img");

// 랜덤숫자로 이미지를 가져온다.
const chosenImage = images[Math.floor(Math.random() * images.length)];

// img의 src에 파일경로 설정한다.
img.src = `img/${chosenImage}`;

document.body.appendChild(img);
