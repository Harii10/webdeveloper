
function readMore() {
    const url = 'https://www.fylehq.com/'
    window.open(url, '_blank')
    
}
// Form Validation
const inputBox = document.querySelector('form-control')
function handleForm(event) {
    event.preventDefault()
    inputBox.value = ""
}

document.querySelectorAll('.info-sec .infos').forEach(item => {
    item.addEventListener('click', event => {
        const imageSrc = event.currentTarget.getAttribute('data-image');
        document.getElementById('image').src = imageSrc;
    })
})
