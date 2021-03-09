//functaion that return list 
function calorie_calc(calorie) {
    const sports = (calorie.sport_field)
    const height = (calorie.height_field)
    const weight = (calorie.weight_field)
    const age = (calorie.age_field)
    const gender = (calorie.gender_field)
    return ([sports,height,weight,age,gender])
}

//functaion that calculate the bmr 
function calculatorBMR(calorie){
    let a = calorie_calc(calorie)
    console.log(a[4]);
    if (a[4] == "Female"){
        let BMR = (655+(a[2]*9.6)+(a[1]*1.8)-(a[3]*4.7))
        console.log(BMR + "IS")
        return (BMR) 
        }
    else if (a[4] == "Male"){
        let BMR = (66+(a[2]*13.8)+(a[1]*5)-(a[3]*6.8))
        return (BMR) 
        }  

}
//functaion that calculate the Calorie For Day 
function calculatorCalorieForDay(calorie){
    let a = calorie_calc(calorie)
    console.log(a[0]);
    let bmr = calculatorBMR(calorie)
    console.log(bmr);
    if (a[0] == "little or no exerise"){
        console.log(((bmr*1.2)*1.1).toFixed(0));
        let Caloriee = ((bmr*1.2)*1.1).toFixed(0)
        return (Caloriee) 
        }
    else if (a[0] == "1-3 exerise a week"){
        let Caloriee = ((bmr*1.375)*1.1).toFixed(0)
        return (Caloriee) 
        }  
    else if (a[0] == "4-5 exerise a week"){
        let Caloriee = ((bmr*1.55)*1.1).toFixed(0)
        return (Caloriee) 
        }  
    else if (a[0] == "6-7 exerise a week"){
        let Caloriee = ((bmr*1.725)*1.1).toFixed(0)
        return (Caloriee) 
        }      
    else if (a[0] == "more than 6-7 exerise a week"){
        let Caloriee = ((bmr*1.9)*1.1).toFixed(0)
        return (Caloriee)
        }      
    }




module.exports = {
    calculatorCalorieForDay:calculatorCalorieForDay
}
