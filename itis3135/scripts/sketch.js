function setup()
{
    var canvas = createCanvas(800, 400);
    background(255);
    canvas.parent('sketch-holder');
}

function draw()
{
    if (mouseIsPressed)
    {
        fill(0);
        ellipse(mouseX, mouseY, 10, 10);
    }
}