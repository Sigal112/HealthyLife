const express = require ('express')

const app = express()
const port = 5000

app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/img',express.static(__dirname + 'public/img'))

//Set Template Engine
app.set('views','./views')
app.set('view engine', 'ejs')

//Navigation

app.get('', (req,res) => {
res.render('index',{text:'blabla'})
})

// Listen on Port 5000

app.listen(port, () => console.info(`App Listening on POrt %{port}`))