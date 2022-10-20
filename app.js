

var Dmin = document.getElementById('Dmin');
var Dsec = document.getElementById('Dsec');
var Dmsec = document.getElementById('Dmsec');
var startbt = document.getElementById('startbt');
var pausebt = document.getElementById('pausebt');
var resetbt = document.getElementById('resetbt');
var min = prompt("Enter Minutes");
var sec = prompt("Enter Seconds");
var msec = 9;
Dmin.innerHTML=min;
Dsec.innerHTML=sec;
Dmsec.innerHTML=msec;
var interval;
function timer(){
    msec--
    Dmsec.innerHTML = msec;
    if(msec === 0){
        sec--
        msec=10
        Dsec.innerHTML= sec;
    }
    if(sec == 1){
        min--
        sec=61
        msec=10
        Dmin.innerHTML = min;
    }
}
function start(){
    interval = setInterval(timer,100) 
    startbt.setAttribute('disabled','disabled')
    pausebt.disabled = false;
    resetbt.disabled = false;
}
function pause(){
    clearInterval(interval)
    pausebt.setAttribute('disabled','disabled')
    startbt.disabled = false;
    resetbt.disabled = false;
}
function reset(){
    pause()
    startbt.disabled = false;
    pausebt.setAttribute('disabled','disabled')
    resetbt.setAttribute('disabled','disabled')
    var min = prompt("Enter Minutes");
    var sec = prompt("Enter Seconds");
    var msec = 9;
    Dmin.innerHTML = min;
    Dsec.innerHTML= sec;
    Dmsec.innerHTML = msec;
}