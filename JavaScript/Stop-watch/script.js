const outputSeconds = document.querySelector('#secs');
const outputTens = document.querySelector('#tens');
const buttonStart = document.querySelector('#btn_start');
const buttonStop = document.querySelector('#btn_stop');
const buttonReset = document.querySelector('#btn_reset');
let Interval;
let seconds='00';
let tens='00';

buttonStart.addEventListener('click',()=>{
    clearInterval(Interval);
    Interval = setInterval(startTimer,10);
});

buttonStop.addEventListener('click',()=>{
    clearInterval(Interval);
});

buttonReset.addEventListener('click',()=>{
    clearInterval(Interval);
    seconds='00';
    tens='00';
    outputSeconds.innerHTML=seconds;
    outputTens.innerHTML=tens;
})
function startTimer(){
    tens++;
    if(tens<=9){//tens=8
        outputTens.innerHTML="0"+tens;
    }
    if(tens>9){
        outputTens.innerHTML=tens;
    };
    if(tens>99){
        seconds++;
        outputSeconds.innerHTML="0"+seconds;
        tens=0;
        outputTens.innerHTML="0"+tens;
    }
    if(seconds>9){
        outputSeconds.innerHTML=seconds;
    }
    
}