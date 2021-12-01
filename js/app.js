const countdown = document.querySelector('.countdown');
const targetDate = new Date('Dec 24, 2021, 00:00:01').getTime();
// milliseconds since Jan 1, 1970, 00:00:00.000 GMT

const interval = setInterval(() => {
    console.log('tick');

    const now = new Date().getTime(); //get current time
    console.log(now)

    const timeLeft = targetDate - now;
    const days = Math.floor(timeLeft/(1000 * 60 * 60 * 24));
    console.log(days);

    const hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    console.log(hours);

    const minutes = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));
    console.log(minutes);

    const seconds = Math.floor(timeLeft % (1000 * 60 ) / 1000);
    console.log(seconds);

    countdown.innerHTML = `
    <div><span>${days} päeva</span></div>
    <div><span>${hours} tundi</span></div>
    <div><span>${minutes} minutit</span></div>
    <div><span>${seconds} sekundit</span></div>
    `
}, 1000);