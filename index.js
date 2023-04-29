const inputEl = document.querySelector('input')
const buttonEl = document.querySelector('button')
const timerEl = document.querySelector('span')
let second = 0
let minute = 0
let hour = 0

const createTimerAnimator = () => {
  second++

  if (second > 59) {
    minute++
    second = 0
  }

  if (minute > 59) {
    hour++
    minute = 0
  }

  let hours = hour < 10 ? `0${hour}` : hour
  let minutes = minute < 10 ? `0${minute}` : minute
  let seconds = second < 10 ? `0${second}` : second

  timerEl.innerHTML = `${hours}:${minutes}:${seconds}`
}

inputEl.addEventListener('input', (e) => {
  const time = Number(e.target.value)
  if (time > 59) {
    minute = Math.floor(time / 60)
    second = time - Math.floor(time / 60) * 60
  }
})

buttonEl.addEventListener('click', () => {
  setInterval(createTimerAnimator, 1000)
})
