function bin_to_decimal(bin) {
    var weight = 0;
    var decimal = 0;
    
    for(var i = bin.length - 1; i >= 0; i--) {
        weight += i < bin.length - 1 ? weight : 1;
        if (bin[i] !== 0 || bin[i] == true) {
            decimal += weight;
        }
    }
    return decimal;
}

function decimal_to_bin(decimal) {
    // pega cada peso, verifica se      
}



/*
 * testes 
**/

console.log(bin_to_decimal([0,1,0,1]))

console.log(bin_to_decimal([1,1,1,1]))

console.log(bin_to_decimal([1,0,1,0]))

console.log(bin_to_decimal([0,0,1,0,1,1,0,1]))

console.log(bin_to_decimal("0001 1100 1001".replaceAll(' ', '').split('')))

console.log(bin_to_decimal([0,0,0,1,1,1,0,0,1,0,0,1]))
