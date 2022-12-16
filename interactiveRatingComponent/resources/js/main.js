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



//=========== 

let thankYouMessage = document.getElementById('thankYouMessage')

document.getElementById('submitBtn').addEventListener('click', (event) => {
    console.log('Alo')

    document.getElementById('content').style.display = 'none'

    return thankYouMessage.innerHTML = `
			
        <div id="phoneIcon">
            <img src="./assets/img/illustration-thank-you.svg" alt="Phone Icon">
        </div>

        <div id="ratingMessage">
            <p>You selected 4 out of 5</p>
        </div>

        <div id="thankYouText">

            <p>Thank you!</p>

            <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
            </p>
        </div>

    `
})


let content = document.getElementById('content')
console.log(content)

document.getElementsByClassName('backBtn')[0].addEventListener('click', (event) => {
    
    content.style.display = 'block'
    thankYouMessage.innerHTML = ''
    submitBtn.classList.add('deactivated')
    numBtn.forEach(btn => btn.classList.remove('active'))
})