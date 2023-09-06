
export const formatFuelNumber = (number: 1 | 2 | 3) => {
    if(number == 1){
        return 'Gasolina'
    }
    else if( number == 2){
        return 'Elétrico'
    }
    else{
        return 'Flex'
    }
};