function displayTime(){
    let dateTime = new Date();
    let date = dateTime.getDate();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById('session');

    if(hrs>=12){
        session.innerHTML='PM';
    }
    else{
        session.innerHTML='AM';
    }

    if(hrs>12){
        hrs=hrs-12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('date').innerHTML=date;
}
setInterval(displayTime, 10);
