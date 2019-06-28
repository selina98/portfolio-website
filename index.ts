// // var $ = require("jquery");
// window.onload = function() {
//     if (window.jQuery) {  
//         // jQuery is loaded  
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }
// ('a').click(function(){
//     $('html, body').animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 500);
//     return false;
// });
import * as express from "express";
var jquery = require('jquery');
const app = express();

app.set('view engine', 'html');

app.get("/", (req, res) => {
    res.render("index", {
        title: "Sleepless in Travel"
    })   
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});