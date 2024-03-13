
function updateClock(){

    let now = new Date();
    console.log(now)
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();


    hours = hours < 10 ? "0" + hours : hours ;
    minutes = minutes < 10 ? "0" + minutes : minutes ;
    seconds = seconds < 10 ? "0" + seconds : seconds ;


    let Time = hours + ":" + minutes + ":" + seconds

    document.querySelector('.clock').innerHTML = Time ;

};

updateClock();
setInterval(updateClock , 1000);

