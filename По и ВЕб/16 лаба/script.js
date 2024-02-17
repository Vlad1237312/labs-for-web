let opacity = 1;

function changeStyle() {
    const stylesheet1 = document.getElementById('stylesheet1');
    const stylesheet2 = document.getElementById('stylesheet2');

    if (stylesheet1.disabled) {
        stylesheet1.disabled = false;
        stylesheet2.disabled = true;
    } else {
        stylesheet1.disabled = true;
        stylesheet2.disabled = false;
    }
}

function changeOpacity() {
    const list = document.getElementById('list');
    const items = list.getElementsByTagName('li');

    if (opacity > 0) {
        opacity -= 0.1;
    } else {
        opacity = 1;
    }

    for (let i = 0; i < items.length; i++) {
        items[i].style.opacity = opacity;
    }
}

function moveHands() {
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const secondAngle = seconds * 6;
    const minuteAngle = minutes * 6 + seconds * 0.1;
    const hourAngle = hours * 30 + minutes * 0.5;

    secondHand.style.transform = `rotate(${secondAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
}

setInterval(moveHands, 1000);
