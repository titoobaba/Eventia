// DARK MODE

const toggle = document.getElementById("darkToggle")

toggle.onclick = function(){

document.body.classList.toggle("dark")

}

// COUNTDOWN TIMER

const eventDate = new Date("Feb 25, 2026 10:00:00").getTime()

setInterval(function(){

const now = new Date().getTime()

const distance = eventDate - now

const days = Math.floor(distance/(1000*60*60*24))

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60))

const minutes = Math.floor((distance%(1000*60*60))/(1000*60))

const seconds = Math.floor((distance%(1000*60))/1000)

document.getElementById("timer").innerHTML =
days + "d " + hours + "h " + minutes + "m " + seconds + "s"

},1000)

// NOTIFICATION

document.querySelector(".bell").onclick=function(){

alert("No new notifications")

}
