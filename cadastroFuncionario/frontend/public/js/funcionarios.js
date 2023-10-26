console.log('funcionarios page')

let tableTr = document.getElementsByClassName('tableContainer')[0].getElementsByTagName('tbody')[0].children
let sidemain = document.getElementsByClassName('sideMain')[0]


if (tableTr.length < 11) {
    sidemain.classList.add('sideMainHeight')
    console.log('tr: ', tableTr.length)
} else {
    sidemain.classList.remove('sideMainHeight')
    console.log('tr: ', tableTr.length)
}




// async function api() {

//     let data = await fetch(`http://localhost:3000/funcionarios`).then(res => res.json())

//     console.log(data)
// }

// api()