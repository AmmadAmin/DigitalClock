function clock() {
    var hrs = document.getElementById("hours");
    var min = document.getElementById("minutes");
    var sec = document.getElementById("seconds");
    var period = document.getElementById("ampm");
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var ampm = "AM";
    if (hour >= 12) {
        ampm = "PM";
        if (hour > 12) {
            hour -= 12;
        }
    }
    if (hour === 0) {
        hour = 12;
    }
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    hrs.innerHTML = hour;
    min.innerHTML = minute;
    sec.innerHTML = second;
    period.innerHTML = ampm;
}
setInterval(clock, 1000);
