function calcularDelta (a, b, c){
    return (b**2)-4*a*c
}
function calcularBaskara (a, b, c){
    const valorDelta =  calcularDelta (a, b, c)
    if (valorDelta < 0)
        return ({ x1:"Inexistente", x2:"Inexistente"})
    else {
        const valorx1 = (-b + Math.sqrt(valorDelta)) / (2 * a)
        const valorx2 = (-b - Math.sqrt(valorDelta)) / (2 * a)
        return ({x1: valorx1, x2: valorx2})
    }
}
function handleBtnCalcular(){
    const vA = document.getElementById('valorA').value
    const vB = document.getElementById('valorB').value
    const vC = document.getElementById('valorC').value
    const raizes = calcularBaskara(vA, vB, vC)
    document.getElementById('resultadoX1').value = raizes.x1
    document.getElementById('resultadoX2').value = raizes.x2
    // document.getElementById('inputX1').value = raizes.x1
    // document.getElementById('inputX2').value = raizes.x2
}
document.getElementById('BtnCalcular').addEventListener('click', handleBtnCalcular)