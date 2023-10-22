console.log('funcionarios page')


async function aaa() {

    let data = await fetch(`http://localhost:3000/funcionarios`).then(res => res.json())

    console.log(data)
}

aaa()