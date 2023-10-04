setDate();

function setDate()
{
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
    
    setTimeout(setDate, 1000);
}

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
    let number = Math.round(Math.abs(document.getElementById("polygon").value));
    alert("A shape with that many sides makes a " + shapes[number - 1] + "gon!");
}

function dyson_sphere()
{
    let stars = ["Eridani A", "Crucis Aa", "Tauri Aa1", "Corvi", "Cephei Aa", "Ursae Majoris A",
    "Geminorum Aa", "Canis Majoris Aa", "Gruis", "Sagittarii A"];
    document.getElementById("dyson-output").innerHTML = "Dyson Sphere constructed around star " + stars[Math.floor(Math.random() * 10)] + ".";
}

let net_worth = 486385699375;

function calculate_value()
{
    net_worth += Math.floor((Math.random() * 10000000) + 10000000);
    document.getElementById("value-output").innerHTML = "Current universal net worth: $" + net_worth;
}

let cookies = 0;

function have_cookie()
{
    if(cookies == 0)
    {
        document.getElementById("cookie-output").innerHTML = "You got a cookie! You now have " + ++cookies + " cookie :D";
        return;
    }
    if(cookies > 100)
    {
        document.getElementById("cookie-output").innerHTML = "Okay, that's enough cookies for you >:(";
        return;
    }
    document.getElementById("cookie-output").innerHTML = "You got a cookie! You now have " + ++cookies + " cookies :D";
}

function generate_website()
{
    let excuses = ["Website generated successfully! However, the IP address cannot be located.",
                   "Website generated successfully! However, the domain was lost somewhere in the stellar network",
                   "Website generation failed, servers lost to black hole",
                   "What were you trying to do again?",
                   "Website generated successfully! However, the website is in a language that has not been discovered yet",
                   "Website generation failed. Cookie-induced web traffic.",
                   "Website generated successfully! Unfortunately, it fell into a time rift and was sent far into the past. It's called YouTube, apparently."];
    document.getElementById("website-output").innerHTML = excuses[Math.floor(Math.random() * 7)];
}

let stars = 200000000000000000000000

function count_stars()
{
    var add_or_subtract = Math.random() < 0.5 ? -1 : 1;
    let current_stars = stars + (add_or_subtract * Math.floor((Math.random() * 900000000000000000)));
    document.getElementById("stars-output").innerHTML = "There are approximately " + current_stars + " stars in the universe.";
}