const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();  //경로 생성
        ctx.moveTo(x, y); //선 시작 좌표
    }else{
        ctx.lineTo(x, y); //선 끝 좌표
        ctx.stroke();     //선 그리기
    }
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}


if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);   //마우스 움직임 
    canvas.addEventListener("mousedown", startPainting); //마우스 클릭 
    canvas.addEventListener("mouseup", stopPainting);    //마우스 클릭 해제
    canvas.addEventListener("mouseleave", stopPainting); 
}

Array.from(colors).forEach( color => color.addEventListener("click", handleColorClick));

