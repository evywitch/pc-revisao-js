//desconto em compra
//regra de negócio
//- se valorCompra >= 100 -> 10% de desconto 
// se valorCompra < 100 -> sem desconto
//cria uma função que execute isso

function CaucularDesconto(valorCompra) {
    let desconto = 0
    if (valorCompra >= 100) {
        desconto = valorCompra *= 0.10
        valorFinal = valorCompra - desconto
    }
    valorFinal = valorCompra - desconto

    return {
        valorCompra,
        desconto,
        valorFinal
    }
    
}

console.log(CaucularDesconto(1200));