import express from "express"; 
import bodyParser from "body-parser"; 

const app = express(); 
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("common")) 


app.get("/", (req,res) => {
    res.send("<h1>Blog Home Page<h1>"); 
}); 


app.listen(3000, ()=>{
    console.log(`app is running on port 3000`)
}); 