//functaion that calculate the bmi 
function bmi_calc(bmi) {
    const height = (bmi.height_field)
    const weight = (bmi.weight_field)
    const bmi_cal= ((weight/(height*height))*10000).toFixed(2)
    return (bmi_cal)

}
//functaion that check the level of the bmi and return to post  
function printbmi(bmi){
    let bmifinal = bmi_calc(bmi)
    if (bmifinal <= 18.4 ){
        return (bmifinal + " ⚠️ " +"you are Underweight ")
    }

    else if (bmifinal >= 18.5 && bmifinal <= 24.9){
        return (bmifinal + " ✔️ "+ " you are Normal weight ")

    }
    else if (bmifinal >= 25 && bmifinal <= 29.9){
        return (bmifinal + " ⚠️ " +" you are Overweight ")

    }
    else if (bmifinal >= 30){
        return (bmifinal + " ⚠️ "  +"  you are Obese ")

    }

}

module.exports = {
    printbmi:printbmi
}
