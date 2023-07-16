const cards = document.getElementsByClassName('card')

function card(classe, i){
  return cards[i].getElementsByClassName(classe)[0].getElementsByClassName('half')
}

let timeInSecs = 60 * 60 * 24 * 8
let day = parseInt(timeInSecs / (60 * 60 * 24))
timeInSecs %= 60 * 60 *24
let hour = parseInt(timeInSecs / (60 * 60))
timeInSecs %= 60 * 60
let min = parseInt(timeInSecs / 60)
timeInSecs %= 60
let sec = parseInt(timeInSecs)

let time = [day, hour, min, sec]

for(let i = 0; i < cards.length; i++){
  card('before', i)[0].setAttribute('data', time[i] < 10 ? '0' + time[i] : time[i])
  card('before', i)[1].setAttribute('data', time[i] < 10 ? '0' + time[i] : time[i])
  
  if(i == 1){
    card('after', i)[0].setAttribute('data', time[i] == 0 ? '23' : time[i] <= 10 ? '0' + (time[i] - 1) : time[i] - 1)
    card('after', i)[1].setAttribute('data', time[i] == 0 ? '23' : time[i] <= 10 ? '0' + (time[i] - 1) : time[i] - 1)
  }else{
    card('after', i)[0].setAttribute('data', time[i] == 0 ? '59' : time[i] <= 10 ? '0' + (time[i] - 1) : time[i] - 1)
    card('after', i)[1].setAttribute('data', time[i] == 0 ? '59' : time[i] <= 10 ? '0' + (time[i] - 1) : time[i] - 1)
  }
}

if(time[3] == 0){
  card('before', 2)[0].classList.add('flip-top')
  card('after', 2)[1].classList.add('flip-down')
  if(time[2] == 0){
    card('before', 1)[0].classList.add('flip-top')
    card('after', 1)[1].classList.add('flip-down')
    if(time[1] == 0){
      card('before', 0)[0].classList.add('flip-top')
      card('after', 0)[1].classList.add('flip-down')
    }
  }
}

setInterval(() => {
  for(let i = 0; i < cards.length - 1; i++){
    card('before', i)[0].classList.remove('flip-top')
    card('after', i)[1].classList.remove('flip-down')
  }

  if(time[3] == 1){
    card('before', 2)[0].classList.add('flip-top')
    card('after', 2)[1].classList.add('flip-down')
    if(time[2] == 0){
      card('before', 1)[0].classList.add('flip-top')
      card('after', 1)[1].classList.add('flip-down')
      if(time[1] == 0){
        card('before', 0)[0].classList.add('flip-top')
        card('after', 0)[1].classList.add('flip-down')
      }
    }
  }

  if(time[3] == 0){
    if(time[2] == 0){
      if(time[1] == 0){
        if(time[0] == 0){
          clearInterval(cd)
          return
        }

        time[1] = 24
        time[0]--

        card('before', 0)[0].setAttribute('data', time[0] < 10 ? '0' + time[0] : time[0])
        card('before', 0)[1].setAttribute('data', time[0] < 10 ? '0' + time[0] : time[0])

        card('after', 0)[0].setAttribute('data', time[0] <= 10 ? '0' + (time[0] - 1) : time[0] - 1)
        card('after', 0)[1].setAttribute('data', time[0] <= 10 ? '0' + (time[0] - 1) : time[0] - 1)
      }
      time[2] = 60
      time[1]--
      
      card('before', 1)[0].setAttribute('data', time[1] < 10 ? '0' + time[1] : time[1])
      card('before', 1)[1].setAttribute('data', time[1] < 10 ? '0' + time[1] : time[1])

      card('after', 1)[0].setAttribute('data', time[1] == 0 ? '23' : time[1] <= 10 ? '0' + (time[1] - 1) : time[1] - 1)
      card('after', 1)[1].setAttribute('data', time[1] == 0 ? '23' : time[1] <= 10 ? '0' + (time[1] - 1) : time[1] - 1)
    }
    time[3] = 60
    time[2]--

    card('before', 2)[0].setAttribute('data', time[2] < 10 ? '0' + time[2] : time[2])
    card('before', 2)[1].setAttribute('data', time[2] < 10 ? '0' + time[2] : time[2])

    card('after', 2)[0].setAttribute('data', time[2] == 0 ? '59' : time[2] <= 10 ? '0' + (time[2] - 1) : time[2] - 1)
    card('after', 2)[1].setAttribute('data', time[2] == 0 ? '59' : time[2] <= 10 ? '0' + (time[2] - 1) : time[2] - 1)
  }
  time[3]--

  card('before', 3)[0].setAttribute('data', time[3] < 10 ? '0' + time[3] : time[3])
  card('before', 3)[1].setAttribute('data', time[3] < 10 ? '0' + time[3] : time[3])

  card('after', 3)[0].setAttribute('data', time[3] == 0 ? '59' : time[3] <= 10 ? '0' + (time[3] - 1) : time[3] - 1)
  card('after', 3)[1].setAttribute('data', time[3] == 0 ? '59' : time[3] <= 10 ? '0' + (time[3] - 1) : time[3] - 1)
}, 1000)