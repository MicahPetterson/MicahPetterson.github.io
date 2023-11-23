let captions = ["Mouse", "iPhone", "Computer", "Adapter", "Hair", "Pepsi", "Exit", "Tall (very!)", "Teacher (also!)", "Excel", "Remote", "Sketchbook", "Outlet", "Nothing (the void)"];
let currentSlide = 0;

loadSlide(0);

function loadSlide(n)
{
    let slides = document.getElementsByClassName("slide");
    for(let i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slides[n].style.display = "flex";
    document.getElementById("caption").innerHTML = captions[n];
    currentSlide = n;
}

function switchSlide(n)
{
    if(currentSlide == 13 && n == 1)
    {
        loadSlide(0);
    }
    else if(currentSlide == 0 && n == -1)
    {
        loadSlide(13);
    }
    else
    {
        loadSlide(currentSlide + n);
    }
}