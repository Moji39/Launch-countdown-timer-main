const days = document.getElementById('days')
const hours = document.getElementById('hours')
const mins = document.getElementById('mins')
const secs = document.getElementById('secs')

let timeInSecs = 60 * 60 * 24 * 8;
let day = parseInt(timeInSecs / (60 * 60 * 24))
timeInSecs %= 60 * 60 *24
let hour = parseInt(timeInSecs / (60 * 60))
timeInSecs %= 60 * 60
let min = parseInt(timeInSecs / 60)
timeInSecs %= 60
let sec = parseInt(timeInSecs)

days.innerHTML = day < 10 ? '0' + day : day
hours.innerHTML = hour < 10 ? '0' + hour : hour
mins.innerHTML = min < 10 ? '0' + min : min
secs.innerHTML = sec < 10 ? '0' + sec : sec

secs.parentElement.classList.add('wink')
mins.parentElement.classList.add('wink')
hours.parentElement.classList.add('wink')
days.parentElement.classList.add('wink')

var cd

cd = setInterval(() => {
  secs.parentElement.classList.remove('wink')
  mins.parentElement.classList.remove('wink')
  hours.parentElement.classList.remove('wink')
  days.parentElement.classList.remove('wink')
  void secs.offsetWidth
  void mins.offsetWidth
  void hours.offsetWidth
  void days.offsetWidth
  if(sec == 1){
    mins.parentElement.classList.add('wink')
    if(min == 0){
      hours.parentElement.classList.add('wink')
      if(hour == 0)
        days.parentElement.classList.add('wink')
    }
  }
  if(sec == 0){
    if(min == 0){
      if(hour == 0){
        if(day == 0){
          clearInterval(cd)
          return
        }
        hour = 24
        day--
        days.innerHTML = day < 10 ? '0' + day : day
      }
      min = 60
      hour--
      hours.innerHTML = hour < 10 ? '0' + hour : hour
    }
    sec = 60
    min--
    mins.innerHTML = min < 10 ? '0' + min : min
  }
  sec--
  secs.innerHTML = sec < 10 ? '0' + sec : sec
  secs.parentElement.classList.add('wink')
}, 1000)