//=========== ACTIVE NUMBER BTN

let numBtn = document.querySelectorAll('.numberBtn')

numBtn.forEach(button => {
    button.addEventListener('click', function () {
        numBtn.forEach(btn => btn.classList.remove('active'))
        this.classList.add('active')
        document.getElementById('submitBtn').classList.remove('deactivated')
    })
})



//=========== 

document.getElementById('submitBtn').addEventListener('click', (event) => {
    console.log('Alo')

    document.getElementById('content').style.display = 'none'

    let showThankYouMessage =  document.getElementById('thankYouMessage').innerHTML = `
			
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

    return showThankYouMessage
})