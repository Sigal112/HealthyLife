const express = require ('express')
const bodyParser = require('body-parser')
const bmi_calculator = require ('./calc')
const calorie_calculator = require ('./calories')
const app = express()
const port = process.env.PORT || 5000

//static files
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/img',express.static(__dirname + 'public/img'))

//Set Template Engine
app.set('views', './views')
app.set('view engine', 'ejs')


app.use(bodyParser.urlencoded({
    extended: true
  }))

//get from page index (home)
app.get('', (req,res) => {
    res.render('index',{ app : req} )
})

//get from page BmiCalculator
app.get('/BmiCalculator', (req,res) => {
    res.render('BmiCalculator',{ 
        app : ""})
    res.end() 
})

//get from page CalorieCalculator
app.get('/CalorieCalculator', (req,res) => {
    res.render('CalorieCalculator',{
         app : '"__"'})
         req.end
})
//post on page BmiCalculator
app.post('/BmiCalculator', (req, res) => {

    const bmi = req.body
    console.log(bmi);
    bmi_final =bmi_calculator.printbmi(bmi)
    res.render('BmiCalculator',{ 
        app : bmi_final,})
    console.log(bmi_final);
    res.end()
})

//post on page CalorieCalculator
app.post('/CalorieCalculator', (req, res) => {

    const calorie = req.body
    console.log(calorie);
    calorie_final =calorie_calculator.calculatorCalorieForDay(calorie)
    res.render('CalorieCalculator',{ app : calorie_final })
    console.log(calorie_final);
    res.end()
    })


// Listen on Port 5000
app.listen(port, () => console.info(`App Listening on POrt %{port}`))