for(let i = 1; i <= 100; i++)
{
    let str = "";
    if(i % 3 == 0)
    {
        str += "Fizz";
    }
    if(i % 5 == 0)
    {
        str += "Buzz";
    }
    if(i % 7 == 0)
    {
        str += "BANG!";
    }
    if(str == "")
    {
        str = i;
    }
    let item = document.createElement("li");
    item.innerText = str;
    document.getElementById("fizzbuzzbang-list").appendChild(item);
}