const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

//this code says that defaults settings we are using the main.handlebars
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}));

//This is to indicate we use handlebars further
app.set('view engine', 'handlebars');

app.get('/',(req,res) => {
    //res.send("Testing");
    res.render('index');
});

app.get('/contact',(req,res) => {
    res.render('contact');
});

//This is the folder which contains files like css, imgs
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

