// list of html classes/ids
    // class="draw-container" id="canvas-cassiopeia"



const canvas = document.getElementById("canvas-cassiopeia");
const btnClear = document.getElementById("clear");
const ctx = canvas.getContext("2d");
const inputName = document.getElementById("new-name");




canvas.width = 500;
canvas.height = 500;


canvas.addEventListener('mousedown', beginDraw);
canvas.addEventListener('mouseup', endDraw);
btnClear.addEventListener('click', clearCanvas);
// inputName.addEventListener()
// btnBack.addEventListener('click', switchPage("pick-constellation.html"));



ctx.lineCap = 'round';
ctx.lineWidth = 4;
ctx.strokeStyle = "#000";


// initializing mouse start position

function beginDraw(e) {
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}


function endDraw(e) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}


function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


// constellation name change





// ------------------------------------------------------------------------------------------------------------------------------------
// // class="draw-container" id="canvas-cassiopeia"

// const canvas = document.querySelector(".draw-container");
// const container = document.querySelector(".game-screen-wrapper"); /* added by VR*/
// const btnClear = document.querySelector("#clear"); 


// // create context variable
// let c = canvas.getContext("2d");

// // create variables for: pen color, pen width, and if pen is drawing
// let penColor = "#566eb0";
// let penWidth = "4";
// let isDrawing = false;
// let startX, startY, endX, endY;

// canvas.width = window.innerWidth - canvas.offsetLeft;
// canvas.height = window.innerHeight - canvas.offsetTop;


// canvas.addEventListener("mousedown", beginDraw, false);
// canvas.addEventListener("mouseup", endDraw, false);
// btnClear.addEventListener("click", clear);
// // canvas.addEventListener("mouseup", draw, false);
// // canvas.addEventListener("mouseout", endDraw, false)

// canvas.addEventListener("mousemove", e => {
//     if (isDrawing) {
//         endX = e.clientX - canvas.getBoundingClientRect().left;
//         endY = e.clientY - canvas.getBoundingClientRect().top;
//         draw();
//     }
// });

// // initializing mouse start position
// function beginDraw(e) {

//     isDrawing = true;
//     startX = e.clientX - canvas.getBoundingClientRect().left;
//     startY = e.clientY - canvas.getBoundingClientRect().top;
//     // c.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
//     // e.preventDefault();
// }

// function endDraw(e) {
//     endX = e.clientX - canvas.getBoundingClientRect().left;
//     endY = e.clientY - canvas.getBoundingClientRect().top;
//     if ( isDrawing) {
//         draw();
//         isDrawing = false;
//     }
//     e.preventDefault();
// }

// function draw(e) {
//     c.clearRect(0,0, canvas.width, canvas.height);
//     c.beginPath();
//     c.moveTo(startX, startY);
//     c.lineTo(endX, endY);
//     c.strokeStyle = penColor;
//     c.lineWidth = penWidth;
//     c.lineCap = "round";
//     c.lineJoin = "round";
//     c.stroke();  

// }

  


// function clear() {
//     c.fillStyle = "transparent";
//     c.clearRect(0,0, canvas.width, canvas.height);
//     c.fillRect(0,0, canvas.width, canvas.height);
// }