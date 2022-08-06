const currentTime = () => {;
    const el = document.querySelector("h1");
    let date = new Date();
    let hours = date.getHours();
    let minuts = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours <10 ? `0${hours}`: hours;
    minuts = minuts <10 ? `0${minuts}`: minuts;
    seconds = seconds <10 ? `0${seconds}`: seconds;
    let time = `${hours}:${minuts}:${seconds}`

    console.log(el)
    el.innerHTML = time;
}
setInterval(currentTime, 1000)