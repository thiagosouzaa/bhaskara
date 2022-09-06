function bhaskara() {
    let a = Number(prompt('Qual é o valor de a?'))
    let b = Number(prompt('Qual é o valor de b?'))
    let c = Number(prompt('Qual é o valor de c?'))

    let equacao = `${a}x² + ${b}x + ${c} = 0`
    let calcd = `${b}² - 4 .  ${a} . ${c}`
    let delta = b ** 2 - 4 * a * c

    if (a > 0 | a === 0) {
        let res = document.querySelector('div#res')
        res.innerHTML = `
        <h3><strong>Resolvendo Bhaskara</strong></h3>
        <p>A equação atual é ${equacao}</p>
        <p>O cálculo realizado será Δ = ${calcd}</p>
        <p>O valor calculado foi Δ = ${delta}</p>
        <p>O esboço do gráfico estará para cima</p>`
        res.style.fontFamily = "Roboto Condensed"
        res.style.fontSize = "20px"
    }
    else if (a < 0) {
        let res = document.querySelector('div#res')
        res.innerHTML = `
        <h3><strong>Resolvendo Bhaskara</strong></h3>
        <p>A equação atual é ${equacao}</p>
        <p>O cálculo realizado será Δ = ${calcd}</p>
        <p>O valor calculado foi Δ = ${delta}</p>
        <p>O esboço do gráfico estará para baixo</p>`
        res.style.fontFamily = "Roboto Condensed"
        res.style.fontSize = "20px"
    }
    else {
        let res = document.querySelector('div#res')
        res.innerHTML = `
        <h3><strong>Resolvendo Bhaskara</strong></h3>
        <p>A equação atual é ${equacao}</p>
        <p>O cálculo realizado será Δ = ${calcd}</p>
        <p>O valor calculado foi Δ = ${delta}</p>`
        res.style.fontFamily = "Roboto Condensed"
        res.style.fontSize = "20px"
    }

}