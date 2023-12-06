const quiz = document.getElementById("quiz-options");

quiz.addEventListener('click', event =>
{
    if(event.target.innerHTML == "8")
    {
        document.getElementById("quiz-solution").innerHTML = "<strong>Correct!</strong> Because the array has 4 items and the index begins at 0, the index of 3 would yield the last element in the array, which is 8.";
        document.getElementById("quiz-solution").style.backgroundColor = "#62d182";
        document.getElementById("quiz-solution").style.display = "block";
    }
    else
    {
        document.getElementById("quiz-solution").innerHTML = "<strong>Incorrect!</strong> Because the array has 4 items and the index begins at 0, the index of 3 would yield the last element in the array. That would be 8, not " + event.target.innerHTML + ".";
        document.getElementById("quiz-solution").style.backgroundColor = "#d16262";
        document.getElementById("quiz-solution").style.display = "block";
    }
})

function runLoop()
{
    let number = document.getElementById("loop-number").value;

    if(number % 1 == 0 && parseInt(number) > -1)
    {
        document.getElementById("loop-caption").innerText = "";
        document.getElementById("loop-output").style.display = "block";
        document.getElementById("loop-output-label").style.display = "block";
        let sum = 0;
        for(let i = 0; i <= number; i++)
        {
            sum += i;
        }
        document.getElementById("loop-output").innerText = "Sum: " + sum;
    }
    else
    {
        document.getElementById("loop-caption").innerText = "You must enter a positive integer.";
        document.getElementById("loop-output").style.display = "none";
        document.getElementById("loop-output-label").style.display = "none";
    }
}

function loopAnswer(answer)
{
    if(answer)
    {
        document.getElementById("loop-quiz-solution").innerHTML = "<strong>Correct!</strong> Both of these loops' conditions have already been met, so neither of them will print anything.";
        document.getElementById("loop-quiz-solution").style.backgroundColor = "#62d182";
        document.getElementById("loop-quiz-solution").style.display = "block";
    }
    else
    {
        document.getElementById("loop-quiz-solution").innerHTML = "<strong>Incorrect!</strong> Both of these loops' conditions have already been met, so neither of them will print anything.";
        document.getElementById("loop-quiz-solution").style.backgroundColor = "#d16262";
        document.getElementById("loop-quiz-solution").style.display = "block";
    }
}