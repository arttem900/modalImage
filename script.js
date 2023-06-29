// MODAL IMAGE
const includedPhoto = document.querySelectorAll('.wrapper-img img'),
      modalImage = document.querySelector('.poup-up'),
      closePoupup = document.querySelector('.poup-up span')


includedPhoto.forEach(img => {
    img.addEventListener('click', () => {
        modalImageVisible(img)
    })
})

closePoupup.addEventListener('click', () => {
    modalImageIsHidden()
})



function modalImageIsHidden() {
    modalImage.classList.remove('visible')
    setTimeout(function () {
        modalImage.style.display = 'none'
    }, 350)
}

function modalImageVisible(img) {
    modalImage.style.display = 'block'
    modalImage.classList.add('visible')
    document.querySelector('.poup-up img').src = img.getAttribute('src')
}