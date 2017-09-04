function setDate(){
        const now = new Date();

        setSeconds(now.getSeconds());
        setMinutes(now.getMinutes());
        setHours(now.getHours());
    }

function setSeconds(seconds){
    const secondsDegrees = (seconds / 60) * 360 + 90;
    const secondHand = document.querySelector('.second-hand');
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

function setMinutes(minutes){
    const minutesDegrees = (minutes / 60) * 360 + 90;
    const minutesHand = document.querySelector('.min-hand');
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
}

function setHours(hours){
    const hoursDegrees = (hours / 12) * 360 + 90;
    const houresHand = document.querySelector('.hour-hand');
    houresHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);