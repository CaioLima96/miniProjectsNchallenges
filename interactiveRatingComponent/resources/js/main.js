//=========== ACTIVE NUMBER BTN

let numBtn = document.querySelectorAll('.numberBtn')
let submitBtn = document.getElementById('submitBtn')

numBtn.forEach(button => {
    button.addEventListener('click', function () {
        numBtn.forEach(btn => btn.classList.remove('active'))
        this.classList.add('active')
        submitBtn.classList.remove('deactivated')
    })
})



//=========== Thank You Message

let thankYouMessage = document.getElementById('thankYouMessage')

document.getElementById('submitBtn').addEventListener('click', (event) => {

    document.getElementById('ratingContent').style.display = 'none'
    document.getElementsByClassName('backBtn')[0].style.display = 'block'

    return thankYouMessage.innerHTML = `
			
        <div id="phoneIcon">
            <img src="./assets/img/illustration-thank-you.svg" alt="Phone Icon">
        </div>

        <div id="ratingMessage">
            <p>You selected ${document.querySelector('.active').innerHTML} out of 5</p>
        </div>

        <div id="thankYouText">

            <p>Thank you!</p>

            <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
            </p>
        </div>

    `
})



//=========== BACK BTN

let ratingContent = document.getElementById('ratingContent')

document.getElementsByClassName('backBtn')[0].addEventListener('click', (event) => {
    
    ratingContent.style.display = 'block'
    thankYouMessage.innerHTML = ''
    submitBtn.classList.add('deactivated')
    numBtn.forEach(btn => btn.classList.remove('active'))
    document.getElementsByClassName('backBtn')[0].style.display = 'none'
})