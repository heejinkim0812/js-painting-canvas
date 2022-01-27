const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const clear = document.getElementById("jsClear");
const saveBtn = document.getElementById("jsSave");
const jsPicker = document.getElementById("jsPicker");
const colorPicker = document.getElementById("colorPicker");
const INITIAL_COLOR = "#2c2c2c"
const CANVAS_SIZE_X = document.getElementsByClassName("canvas")[0].offsetWidth;
const CANVAS_SIZE_Y = document.getElementsByClassName("canvas")[0].offsetWidth;

canvas.width = CANVAS_SIZE_X;
canvas.height = CANVAS_SIZE_Y;

//Default
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE_X, CANVAS_SIZE_Y);

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;


/*=====================FUNCTION=====================*/

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
    ctx.fillStyle = color;
}

function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick(event){
    if(filling === true){
        filling = false;
        mode.innerText = "Fill";
    }else{
        filling = true;
        mode.innerText = "Paint";
    }
}

function handleCanvasClick(){
    if(filling === true){
        ctx.fillRect(0, 0, CANVAS_SIZE_X, CANVAS_SIZE_Y);
    }
}

function handleClearClick(){
    ctx.clearRect(0, 0, CANVAS_SIZE_X, CANVAS_SIZE_Y);
}

function handleCM(event){
    event.preventDefault();
}

function handleSaveClick(){
    const image = canvas.toDataURL();          // 디폴트: png 
    const link = document.createElement("a");
    link.href = image;                         // 링크 생성하고 주소 삽입
    link.download = "PaintJS[✨]";            // 다운로드 파일 이름
    link.click();                              // 링크 클릭해서 다운로드 완료
}

function handleClickInput() {
	colorPicker.click();
}

function handlePickColor(event) {
    const savedColor = event.target.value;
	ctx.strokeStyle = savedColor;
	ctx.fillStyle = savedColor;
}


/*=====================EVENT=====================*/

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);   //마우스 움직임 
    canvas.addEventListener("mousedown", startPainting); //마우스 클릭 상태
    canvas.addEventListener("mouseup", stopPainting);    //마우스 클릭 해제
    canvas.addEventListener("mouseleave", stopPainting); 
    canvas.addEventListener("click", handleCanvasClick); //마우스 클릭
    canvas.addEventListener("contextmenu", handleCM);    //오른쪽 마우스 클릭
}

Array.from(colors).forEach( color => color.addEventListener("click", handleColorClick));

if(range){
    range.addEventListener("input", handleRangeChange);
}

if(mode){
    mode.addEventListener("click", handleModeClick);
}

if(clear){
    clear.addEventListener("click", handleClearClick)
};

if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick);
}

if (jsPicker) {
	jsPicker.addEventListener("click", handleClickInput);
}

if (colorPicker) {
	colorPicker.addEventListener("change", handlePickColor);
}
