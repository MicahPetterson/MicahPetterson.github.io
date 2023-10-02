alert("Hey my script is running");

let d = new Date();

let hours = d.getHours();
let meridiem = "AM";

if (d.getHours() > 12)
{
    hours = d.getHours() - 12;
    meridiem = "PM";
}

let minutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();

let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = weekday[d.getDay()];

let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let month = months[d.getMonth()];

document.getElementById("date").innerHTML = "Today is " + hours + ":" + minutes + meridiem + 
" on " + day + ", " + d.getDate() + " " + month + ", " + d.getFullYear() + ".";

function respond()
{
    let name = document.getElementById("name").value;
    let wellbeing = document.getElementById("wellbeing").value;
    if(name == "")
    {
        name = "nameless entity";
    }
    if(wellbeing == "")
    {
        wellbeing = "indeterminate";
    }
    document.getElementById("first-form-response").innerHTML = "Petterson & Co. welcomes you, " + 
    name + "!" + " We're glad you're doing " + wellbeing + "!";
}

function name_polygon()
{
    let shapes = ["hena", "di", "tri", "tetra", "penta", "hexa", "hepta", "octa", "nona", "deca"];
    alert("A shape with that many sides makes a " + shapes[document.getElementById("sides").value - 1] + "gon!");
}