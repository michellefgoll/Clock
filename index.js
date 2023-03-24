const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const backgroundEl = document.querySelector("body");

function updateClock() {
    currentDate = new Date();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    console.log(hour,minute,second);

    const hourDeg = (((hour%12)/12)*360);
    hourEl.style.transform = `rotate(${hourDeg}deg)`;

    const minuteDeg = minute*6;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;

    const secondDeg = second*6;
    secondEl.style.transform = `rotate(${secondDeg}deg)`;

    if(minute==0 && second==0){
        console.log("one hour passed!!!")
        backgroundEl.style.backgroundColor = "#8bbe1b";
    }
    else if(second==0){
        console.log("one minute passed!!!");
        backgroundEl.style.backgroundColor = "#f50b94";
    }
    else backgroundEl.style.backgroundColor = "lightgray";
}

    /*calls the function every second*/
setInterval(updateClock,1000);