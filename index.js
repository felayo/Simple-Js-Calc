// functions for each of the operations
function add()
{
        let num1 = document.getElementById("first-input").value;
        let num2 = document.getElementById("second-input").value;
        if(num1 === '' || num2 === ''){
                alert('input your values')
        }
        document.getElementById("result").value = parseInt(num1) + parseInt(num2);
}

function subtract()
{
        let num1 = document.getElementById("first-input").value;
        let num2 = document.getElementById("second-input").value;
        document.getElementById("result").value = num1 - num2;
}

function multiply()
{
        let num1 = document.getElementById("first-input").value;
        let num2 = document.getElementById("second-input").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divide() 
{ 
        let num1 = document.getElementById("first-input").value;
        let num2 = document.getElementById("second-input").value;
        document.getElementById("result").innerHTML = num1 / num2;
}