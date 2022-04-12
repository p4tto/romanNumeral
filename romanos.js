let romanos = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"

}

function transformarEmRomano(numero){
    if(numero <= 0 || numero >= 4000){
        return 'The number must be higher than 0 and less then 4000'
    }

    Math.round(numero)

    let keys = Object.keys(romanos)
    let values = Object.values(romanos)
    let contador = 1
    let resultado = [] 

    const transformador = num =>{
        if(contador != 14){
            let novoNum = num - keys[keys.length - contador]

            if( novoNum >= 0){
                resultado.push(values[values.length- contador])
                
                return transformador(novoNum)

            }else {
                contador++
                return transformador(num)
            }
            
        }else return resultado
        
    }
    
    transformador(numero)

    return resultado.join('').toString()
}

console.log(transformarEmRomano(2.5))

