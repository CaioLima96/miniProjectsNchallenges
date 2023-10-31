let inputNome = document.getElementById('nome')
let inputIdade = document.getElementById('idade')
let inputEmail = document.getElementById('email')


function inputCharLimiter (inp, num, errMsg) {
    ['keypress' , 'keydown', 'input', 'keyup', 'change'].forEach((el) => {
        inp.addEventListener(el, function (e) {
    
            // console.log('target: ', e.target)
            console.log('evento: ', e)
            console.log('value: ',inp.value.length)
            console.log('key code: ', e.keyCode)
        
            if (inp.value.length > num && e.keyCode !== 8 && e.keyCode !== 46 && e.key !== "Delete" && e.which !== 46) {
                e.preventDefault()
            }
        })
    })
}
inputCharLimiter(inputNome, 8, 'Somente entre 4 e 50 caracteres')
inputCharLimiter(inputIdade, 1, 'Somente 2 caracteres')
inputCharLimiter(inputEmail, 39, 'Somente entre 4 e 39 caracteres')


//input mask
// function salarioFilter(textbox, inputFilter, errMsg) {
//     ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function (event) {
//         textbox.addEventListener(event, function (e) {
//             if (inputFilter(this.value)) {
//                 // Accepted value
//                 if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {
//                     this.classList.remove("input-error");
//                     this.setCustomValidity("");
//                 }
//                 this.oldValue = this.value;
//                 this.oldSelectionStart = this.selectionStart;
//                 this.oldSelectionEnd = this.selectionEnd;
//             } else if (this.hasOwnProperty("oldValue")) {
//                 // Rejected value - restore the previous one
//                 this.classList.add("input-error");
//                 this.setCustomValidity(errMsg);
//                 this.reportValidity();
//                 this.value = this.oldValue;
//                 // this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
//             } else {

//                 // Rejected value - nothing to restore
//                 this.value = "";
//             }
//         });
//     });
// }
// salarioFilter(document.getElementById("salario"),
//     function (value) {
//         return /^(?!(0))[0-9]*$/.test(value) && (value === "" || parseInt(value) <= 10000);
//     }, "O valor deve ser entre 1,000 e 10,000")


//-----------------------


function inputHandler(masks, max, event) {
    let c = event.target;
    let v = c.value.replace(/\D/g, '');
    let m = c.value.length > max ? 1 : 0;
    VMasker(c).unMask();
    VMasker(c).maskPattern(masks[m]);
    c.value = VMasker.toPattern(v, masks[m]);
}

let telMask = ['(99) 9999-99999', '(99) 9 9999-9999'];
let tel = document.getElementById('telefone');
VMasker(tel).maskPattern(telMask[0]);
tel.addEventListener('input', inputHandler.bind(undefined, telMask, 13), false);


// let inputEvents = ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"]
