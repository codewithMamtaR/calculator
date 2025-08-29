//we are taking a variable s for memory related operations and initializing to 0
let s=0;
//every key (the numbers and arithmetic operators and .)pressed will concatenate the value of previous key 
// with current key to form the final expression
function mkexp(n)
{
     document.getElementById('exp').value+=n;
}
//clear the display
function cncl()
{
    document.getElementById('exp').value=' ';
}

function plus(op)
{
    //get the expression 
    let display = document.getElementById('exp');
    let v = display.value;
    //get the last char from expression
    // Prevent multiple consecutive operators like ++ or +-
    let lastChar = v.slice(-1);

    // Only add operator if the last character is not already an operator
    if (['+', '-', '*', '/'].includes(lastChar)) {
        return; // Do nothing
    }
    //concatenate + with the expression
    display.value += op;
}
//same as previous code
function minus(op)
{
    let display = document.getElementById('exp');
    let v = display.value;

    // Prevent multiple consecutive operators like ++ or +-
    let lastChar = v.slice(-1);

    // Only add operator if the last character is not already an operator
    if (['+', '-', '*', '/'].includes(lastChar)) {
        return; // Do nothing
    }

    display.value += op;
}
//same as previous code
function divi(op)
{
    let display = document.getElementById('exp');
    let v = display.value;

    // Prevent multiple consecutive operators like ++ or +-
    let lastChar = v.slice(-1);

    // Only add operator if the last character is not already an operator
    if (['+', '-', '*', '/'].includes(lastChar)) {
        return; // Do nothing
    }

    display.value += op;
}
function point()
{
    let exp = document.getElementById("exp");
    let value = exp.value;
    let lastChar = value.slice(-1);
  
    // Prevent consecutive dots
    if (lastChar === '.') return;
  
    // If no operator yet, check whole value
    // Else check only the last number
    let i = value.length - 1;
    while (i >= 0 && !['+', '-', '*', '/'].includes(value[i])) {
      if (value[i] === '.') return; // already has dot in current number
      i--;
    }
  
    exp.value += '.';
}
//same as + - /
function multi(op)
{
    let display = document.getElementById('exp');
    let v = display.value;

    // Prevent multiple consecutive operators like ++ or +-
    let lastChar = v.slice(-1);

    // Only add operator if the last character is not already an operator
    if (['+', '-', '*', '/'].includes(lastChar)) {
        return; // Do nothing
    }

    display.value += op;
}
//evaluate the final expression and display the answer

function equal()
{
    try{
            e=document.getElementById('exp').value;
            ans=eval(e);
            document.getElementById('exp').value=ans;
        }
    catch{
            document.getElementById('exp').value='Error';
        }
}
//if backspace update  the expression excluding the last character
function bckspc()
{
    document.getElementById('exp').value=document.getElementById('exp').value.slice(0,-1);
    
}
function memclr()
{
    s=0;
}
//add the value of user input to s and store it in memory 
function madd()
{
    a=document.getElementById('exp').value;
    if (a != '')
        s = s + Number(a);
}
//subtract the user input from s
function mminus()
{
    a=document.getElementById('exp').value;
    if (a != '')
        s = s - Number(a);
}
//when user tries to recall display the value stored in s 
function mrecall()
{
    let v = s;
    if (v < 0) {
        v = `(${v})`;  // Wrap negative value
    }
  document.getElementById('exp').value = v;
}