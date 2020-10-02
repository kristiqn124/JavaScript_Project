var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var second =document.getElementById('second');

function startTime(){
    var time = new Date();
    minutes.innerHTML = time.getMinutes();
    hours.innerHTML =  time.getHours();
    if(time.getSeconds()<=9){
    second.innerHTML ='0'+ time.getSeconds();
    }
    else{
        second.innerHTML =time.getSeconds();
    }
    var t = setTimeout(startTime, 500);
}

startTime();