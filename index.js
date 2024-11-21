import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";
import ejs from "ejs";


//SETTING OUR SERVER WITH EXPRESS
const app = express();
app.use(express.static("public"));
let port = 3000;
app.listen(3000, ()=>{
    console.log(`Server running on port: ${port}.`);
});


//WHAT USER GETS ON OUR HOMEPAGE
const __dirname = dirname(fileURLToPath(import.meta.url));
app.get("/", (req,res) => {
    res.render("index.ejs");
});


//PARSE THE INFORMATION THAT COMES THROUGH FORM
app.use(bodyParser.urlencoded({extended: true}));

//PASS THE THE INFORMATION TO PARAGRAPH BENEATH THE FORM
app.post('/create', (req,res) => {
    const post = req.body["createPost"];
    res.render("index.ejs", {blogPost: post});
});

function deletePost(){
    let deletedPost = document.getElementById("userPost");
    deletedPost.innerHTML = "";
}