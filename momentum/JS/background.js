const images = ["1.jpeg", "2.jpeg", "3.jpeg"];

// images 랜덤으로 가져오기
const chosenImg = images[Math.floor(Math.random() * images.length)];
// JS에서 img element 생성하기
const bgImg = document.createElement('img');

// 경로 설정
bgImg.src = `img/${chosenImg}`;
bgImg.id = 'bg';

// JS로 img element body에 추가해주기
document.body.prepend(bgImg); // prepend는 맨 앞에 오게 한다.