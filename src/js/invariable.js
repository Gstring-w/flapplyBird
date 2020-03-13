const wrapperDom = document.getElementsByClassName("wrapper")[0];
const backDom = document.getElementsByClassName("background")[0];
const wrapDom = document.getElementsByClassName("wrapper")[0];
const birdDom = document.getElementsByClassName("bird")[0];
const groundDom = document.getElementsByClassName("ground")[0];
const startDom = document.getElementsByClassName("start")[0];

const wrapperStyle = getComputedStyle(wrapperDom);
const groundStyle = getComputedStyle(groundDom);
const birdStyle = getComputedStyle(birdDom);
const backStyle = getComputedStyle(backDom);
const wrapStyle = getComputedStyle(wrapDom);

const groundStyleWidth = parseInt(groundStyle.width)
const wrapStyleWidth = parseFloat(wrapStyle.width)
const backStyleHeight = parseInt(backStyle.height)
const groundStyleHeight = parseInt(groundStyle.height)
const contentHeight = backStyleHeight - groundStyleHeight;
