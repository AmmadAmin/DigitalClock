function clock() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let hrs: any = document.getElementById("hours");
  let min: any = document.getElementById("minutes");
  let sec: any = document.getElementById("seconds");
  let period: any = document.getElementById("ampm");
  let date: any = document.getElementById("date");
  let day: any = document.getElementById("dd");

  let time = new Date();

  let hour: number | string = time.getHours();
  let minute: number | string = time.getMinutes();
  let second: number | string = time.getSeconds();
  let ampm: number | string = "AM";
  let d = time.getDay();
  let dd = time.getDate();
  let mm = time.getMonth();
  let yy = time.getFullYear();

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
  day.innerHTML = days[d];
  date.innerHTML = months[mm] + "/" + dd + "/" + yy;
}
setInterval(clock, 1000);
