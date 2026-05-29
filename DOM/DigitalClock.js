const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () { // it controls the event of js
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);