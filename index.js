import express from "express"; 
import bodyParser from "body-parser"; 
import morgan from "morgan"; 

const app = express(); 
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("common")) 
app.use(express.static("public"))

app.get("/", (req,res) => {
    res.render("index.ejs",); 
}); 

app.get("/about", (req, res) => {
    res.render("about.ejs"); 
})

app.get("/contect", (req, res) => {
    res.render("contect.ejs")
})

app.listen(port, ()=>{
    console.log(`app is running on port ${port}`)
}); 
