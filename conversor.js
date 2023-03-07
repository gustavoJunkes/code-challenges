function bin_to_decimal(bin) {
    var weight = 1;
    var decimal = 0;
    for(var i = 1; i < bin.length; i++) {
        weight += weight;
        console.log(weight)
        if (bin[i] !== 0 || bin[i] == true) {
            decimal += weight;
        }
    }
    return decimal;
}

function decimal_to_bin(decimal) {
    
}

console.log(bin_to_decimal([1,0,0,1]))
