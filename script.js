let cursorX = 0;
let cursorY = 0;
//마우스 커서의 변수 선언

const newCursor = document.querySelector(`.cursor-pointed`);
//HTML Elements 가져오기

function mouseFunc(event) {
  console.log(event.clientX, event.clientY);
  cursorX = event.clientX + `px`;
  cursorY = event.clientY + `px`;

  newCursor.style.left = cursorX;
  newCursor.style.top = cursorY;

}
//마우스 커서의 좌표값으로 커서 모양의 div 이동

window.addEventListener("mousemove", mouseFunc);
//화면에서 마우스가 움직일 때마다 mouseFunc 실행