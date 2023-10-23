const calculator = document.getElementById("calculator");
let num_display = document.getElementById("calc-display");
let operator_display = document.getElementById("operator-display");
let caption = document.getElementById("calc-caption");
let operand_1 = null;
let operand_2 = null;
let operand_2_begun = false;
let operator_queued = null;
let num_has_decimal = false;

calculator.addEventListener('click', event =>
{
    if(event.target.matches('.number-button'))
    {
        caption.innerHTML = "";
        if (operator_queued != null && operand_2_begun == false)
        {
            if(num_display.innerHTML.charAt(num_display.innerHTML.length - 1) == ".")
            {
                operand_1 = num_display.innerHTML.slice(0, -1);
            }
            else
            {
                operand_1 = num_display.innerHTML;
            }
            num_display.innerHTML = event.target.innerHTML;
            operand_2_begun = true;
            operator_display.innerHTML = operand_1 + " " + operator_queued;
            num_has_decimal = false;
        }
        else
        {
            if (num_display.innerHTML == "0"/* || (operand_2 == null && operator_display != null)*/)
            {
                num_display.innerHTML = event.target.innerHTML;
            }
            else
            {
                num_display.innerHTML += event.target.innerHTML;
            }
        }
        captionGen(parseFloat(num_display.innerHTML));
    }
    else if (event.target.matches('.operator-button'))
    {
        if (num_display.innerHTML != "")
        {
            operator_queued = event.target.innerHTML;
            operator_display.innerHTML = operator_queued;
            num_has_decimal = false;
        }
        else
        {
            alert("Enter a number first!");
        }
    }
    else if (event.target.matches('.decimal-button'))
    {
        caption.innerHTML = "";
        if (num_has_decimal == false)
        {
            if(num_display.innerHTML == "" || (!operand_2_begun && operator_display.innerHTML != ""))
            {
                if (!operand_2_begun && operator_display.innerHTML != "")
                {
                    operand_2_begun = true;
                    operand_1 = num_display.innerHTML;
                    operator_display.innerHTML = operand_1 + " " + operator_queued;
                }
                if (operator_display.innerHTML != "" && operator_queued == null)
                {
                    operator_display.innerHTML = "";
                }
                num_display.innerHTML = "0.";
                num_has_decimal = true;
            }
            else
            {
                num_display.innerHTML += event.target.innerHTML;
                num_has_decimal = true;
            }
        }
    }
    else if (event.target.matches('.clear-button'))
    {
        num_display.innerHTML = "";
        operator_display.innerHTML = "";
        operand_1 = null;
        operand_2 = null;
        operand_2_begun = false;
        operator_queued = null;
        num_has_decimal = false;
        caption.innerHTML = "";
    }
    else if (event.target.matches('.equals-button'))
    {
        if (operator_queued != null && operand_2_begun == true)
        {
            operand_2 = num_display.innerHTML;
            let result = 0;
            let result_dec_length = 0;
            op_1 = parseFloat(operand_1);
            op_2 = parseFloat(operand_2);

            if(op_1 % 1 != 0 && op_2 % 1 != 0)
            {
                let length_1 = operand_1.split('.')[1].length;
                let length_2 = operand_2.split('.')[1].length;
                result_dec_length = (length_1 > length_2) ? length_1 : length_2;
            }
            else if (op_1 % 1 != 0)
            {
                result_dec_length = operand_1.split('.')[1].length;
            }
            else if (op_2 % 1 != 0)
            {
                result_dec_length = operand_2.split('.')[1].length;
            }

            if (operator_queued == "+")
            {
                result = op_1 + op_2;
                result = parseFloat(result.toFixed(result_dec_length));
            }
            else if (operator_queued == "-")
            {
                result = op_1 - op_2;
                result = parseFloat(result.toFixed(result_dec_length));
            }
            else if (operator_queued == "×")
            {
                result = op_1 * op_2;
            }
            else if (operator_queued == "÷")
            {
                result = op_1 / op_2;
            }

            num_display.innerHTML = result;
            operator_display.innerHTML = operand_1 + " " + operator_queued + " " + operand_2 + " =";
            operand_1 = null;
            operand_2 = null;
            operand_2_begun = false;
            operator_queued = null;
            num_has_decimal = false;
            captionGen(result);
        }
    }
});

function captionGen(num)
{
    switch(num) {
        case 1000000001:
            caption.innerHTML = "Hello Weavil!";
            break;
        case 12:
            caption.innerHTML = "Hi Blue!!";
            break;
        case 25:
            caption.innerHTML = "Hi Anna! >:D";
            break;
        case 888888888:
            caption.innerHTML = "Howdy, Luna!!";
            break;
        case 69:
            caption.innerHTML = "Nice.";
            break;
        case 420:
            caption.innerHTML = "Okay, buddy.";
            break;
        case 8008135:
            caption.innerHTML = "Real mature.";
            break;
        case 42:
            caption.innerHTML = "The answer to life, the universe, and everything.";
            break;
        case 3.14:
            caption.innerHTML = "What kind?";
            break;
        case 911:
            caption.innerHTML = "Is that...someone on the dance floor?";
            break;
        case 123456789:
            caption.innerHTML = "Yep. That's the right order.";
            break;
        case 4740012:
            caption.innerHTML = "Hey Bing!!";
            break;
        case 5774230560:
            caption.innerHTML = "Yo Shooge :D";
            break;
        case 4196178005:
            caption.innerHTML = "Eyy, well if it isn't Double Decker Danny!";
            break;
        case 10002:
            caption.innerHTML = "O shoot it Soapoapie";
            break;
        case 17:
            caption.innerHTML = "Hi Sammy!";
            break;
        case 360:
            caption.innerHTML = "Woah! That's a full circle!";
            break;
        case 21:
            caption.innerHTML = "Ahh, yes. Good old 9 + 10.";
            break;
        default:
            caption.innerHTML = "";
            break;
      }
}