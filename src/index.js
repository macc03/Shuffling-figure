(function () {
  const container = document.querySelector('.banner .container')
  const arrowPrev = document.querySelector('.banner .arrows .left')
  const arrowNext = document.querySelector('.banner .arrows .right')
  const btns = document.querySelectorAll('.banner .btns .btn-item')
  let index = 0

  btns.forEach((item, idx) => {
    item.addEventListener('click', () => {
      index = idx
      changeCurrentBtn()
      container.style.left = -index * 600 + 'px'
    })
  })

  const changeCurrentBtn = () => {
    for (let i of btns) {
      i.classList.remove('active')
    }
    btns[index].classList.add('active')
  }


  arrowNext.addEventListener('click', (e) => {
    index++
    if (index > 3) { index = 0 }
    container.style.left = -index * 600 + 'px'
    changeCurrentBtn()
  })

  arrowPrev.addEventListener('click', (e) => {
    index--
    if (index < 0) {
      index = 3
      container.style.left = -index * 600 + 'px'
    } else {
      container.style.left = index * 600 + 'px'
    }
    changeCurrentBtn()
  })

  document.querySelector('.banner').addEventListener('mouseover', () => {
    console.log(1)
    if(timer)
    clearTimeout(timer)
  })

  let timer = setTimeout(function loop() {
    arrowNext.click()
    timer = setTimeout(loop, 1000)
  }, 1000)

  container.addEventListener('mouseout', () => {
    let timer = setTimeout(function loop() {
      arrowNext.click()
      timer = setTimeout(loop, 1000)
    }, 1000)
  })
})()  
