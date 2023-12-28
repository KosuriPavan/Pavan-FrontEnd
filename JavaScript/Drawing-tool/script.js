const canvas = document.querySelector("canvas");
const toolBtns = document.querySelectorAll(".tool");
const fillColor = document.querySelector("#fill-color");
const sizeSlider = document.querySelector("#size-slider");
const colorBtns = document.querySelectorAll(".colors .option")
const colorPicker = document.querySelector(".color-picker");
const clearCanvas = document.querySelector(".clear-canvas");
const saveAsImage = document.querySelector(".save-as-image");
const ctx = canvas.getContext("2d");

let prevMouseX, prevMouseY;
let snapshot;
let isDrawing = false;
let selectedTool = "brush";
let brushWidth = 5;
let selectedColor = "#000";
const setCanvasBackground = () =>{
    ctx.fillStyle = "#fff";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = selectedColor;//setting fillstyle back to the selectedColor, it'll be the brush color
}

window.addEventListener("load", () => {
    // setting canvas width and height..offsetwidth and height returns viewable width/height of an element
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    setCanvasBackground();
});
const drawRectangle = (e) => {
    if (!fillColor.checked) {
        return ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
    }
    ctx.fillRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
}
const drawCircle = (e) => {
    ctx.beginPath();
    let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX), 2) + Math.pow((prevMouseY - e.offsetY), 2))
    ctx.arc(prevMouseX, prevMouseY, radius, 0, Math.PI * 2);
    ctx.stroke();
    fillColor.checked ? ctx.fill() : ctx.stroke();
}
const drawTriangle = (e) => {
    ctx.beginPath();
    ctx.moveTo(prevMouseX, prevMouseY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY);
    ctx.closePath();
    fillColor.checked ? ctx.fill() : ctx.stroke();
}
const startDraw = (e) => {
    isDrawing = true;
    prevMouseX = e.offsetX;
    prevMouseY = e.offsetY;
    ctx.beginPath();
    ctx.lineWidth = brushWidth;
    ctx.strokeStyle=selectedColor;
    ctx.fillStyle=selectedColor;
    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

const stopDraw = () => {
    isDrawing = false;
}
const drawing = (e) => {
    if (!isDrawing) return;
    ctx.putImageData(snapshot, 0, 0);
    if (selectedTool === "brush" || selectedTool==="eraser") {
        ctx.strokeStyle=selectedTool==="eraser"? "#fff": selectedColor;
        ctx.lineTo(e.offsetX, e.offsetY);//creating line according to the mouse pointer
        ctx.stroke();//drawing/filling line with color
    }
    else if (selectedTool === "rectangle") {
        drawRectangle(e);
    }
    else if (selectedTool === "circle") {
        drawCircle(e);
    }
    else if (selectedTool === "triangle") {
        drawTriangle(e);
    }
}

toolBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".options .active").classList.remove("active");
        btn.classList.add("active");
        selectedTool = btn.id;
    })
})

sizeSlider.addEventListener("change", () => brushWidth = sizeSlider.value);

colorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".options .selected").classList.remove("selected");
        btn.classList.add("selected");
        selectedColor=window.getComputedStyle(btn).getPropertyValue("background-color");
    })
})

colorPicker.addEventListener("change",()=>{
    colorPicker.parentElement.style.background = colorPicker.value;
    colorPicker.parentElement.click();
});

clearCanvas.addEventListener("click",()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    setCanvasBackground();
})

saveAsImage.addEventListener("click",()=>{
    const link = document.createElement("a");//creating <a> element
    link.download = `${(Date.now())}.jpg`;//passing current data as link download value
    link.href = canvas.toDataURL();//passing canvasData as link href value
    link.click();//clicking link to download image
})
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", stopDraw);
// ctx.beginPath(); // Start a new path
// ctx.moveTo(30, 50); // Move the pen to (30, 50)
// ctx.lineTo(50, 100); // Draw a line to (150, 100)
// ctx.stroke(); // Render the path
