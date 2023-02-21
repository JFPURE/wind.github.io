// let myHeading = document.querySelector('h1')
// myHeading.textContent = 'Hello World!'

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

let myImg = document.querySelector("img");
myImg.onclick = () => {
  let mySrc = myImg.getAttribute("src");
  if (mySrc === "images/AI.jpeg") {
    myImg.setAttribute("src", "images/appleAI.jpg");
  } else {
    myImg.setAttribute("src", "images/AI.jpeg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Hello " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Hello " + storedName;
}
myButton.onclick = () => {
  setUserName();
};
