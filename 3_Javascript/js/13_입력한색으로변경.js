//배경색을 적용한 각 div 배열 해봄
const boxList = document.querySelectorAll(".box");

// 그 다음 배경색 입력할 각 input 배열
const inputList = document.querySelectorAll(".color-input");

// console.log(boxList);
// console.log(inputList);

// #changeButton 요소를 클릭했을 때
document.querySelector("#changeButton").addEventListener("click", function(){

  // inputList에 작성된 각 내용을 boxList에 있는 각 div에 대입
  for(let i=0; i < boxList.length; i++) {
    boxList[i].style.backgroumdColor = inputList[i].value;
  }

});
