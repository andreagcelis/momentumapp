let time = document.getElementById("current-time");

setInterval(() => {
    let date = new Date();
    time.innerHTML = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
}, 1000);
