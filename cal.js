//Calculator with keyboard and click functionality supported.

var buttons = document.getElementsByTagName("button")
var display = document.querySelector("div.display")
var operand1 = 0;
var operator = null;
var operand2 = null;
console.log(buttons)
document.addEventListener('keydown', function operation1(event) {
    
    const btn = event.key;
    console.log(btn)
    if (btn == '1' || btn == '2' || btn == '3' || btn == '4' || btn == '5' || btn == '6' || btn == '7' || btn == '8' || btn == '9' || btn == '0') {
        if(display.innerHTML=='0'){
            display.innerHTML=''
        }
        
        display.innerHTML += btn;
        
    }
    else if (btn == '*' || btn == '/' || btn == '+' || btn == '-') {
        if (display.innerHTML != '') {
            operand1 = parseFloat(display.innerHTML);
            display.innerHTML=''
            operator = btn
        }
    }
    else if (btn == '@') {
        if(display.innerHTML != ''){
            display.innerHTML = -1 * display.innerHTML;
        }

    }
    else if (btn == '%') {
        if(display.innerHTML != ''){
            display.innerHTML = 0.01 * display.innerHTML;
            console.log(typeof(display.innerHTML))
        }

    }
    else if (btn == '.') {
        if(display.innerHTML != '' && display.innerHTML.charAt(display.innerHTML.length-1) != '.'){
            display.innerHTML += '.';
        }

    }
    else if (btn == 'A') {
        display.innerHTML = ''
        operand1 = 0
        operand2 = null
        operator = null
    }
    else if (btn == '=') {
        if(display.innerHTML != ''){
            
                operand2 = parseFloat(display.innerHTML)
            
            
                var res = eval(operand1 + operator + operand2);
                console.log(res)
                display.innerHTML = (res);
            
            operand2 = res
          
        }

    }
});
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function operation() {
        var btn = this.getAttribute('meta-data')

        if (btn == '1' || btn == '2' || btn == '3' || btn == '4' || btn == '5' || btn == '6' || btn == '7' || btn == '8' || btn == '9' || btn == '0') {
            if(display.innerHTML=='0'){
                display.innerHTML=''
            }
            
            display.innerHTML += btn;
            
        }
        else if (btn == '*' || btn == '/' || btn == '+' || btn == '-') {
            if (display.innerHTML != '') {
                operand1 = parseFloat(display.innerHTML);
                display.innerHTML=''
                operator = btn
            }
        }
        else if (btn == '+-') {
            if(display.innerHTML != ''){
                display.innerHTML = -1 * display.innerHTML;
            }

        }
        else if (btn == '%') {
            if(display.innerHTML != ''){
                display.innerHTML = 0.01 * display.innerHTML;
                console.log(typeof(display.innerHTML))
            }

        }
        else if (btn == '.') {
            if(display.innerHTML != '' && display.innerHTML.charAt(display.innerHTML.length-1) != '.'){
                display.innerHTML += '.';
            }

        }
        else if (btn == 'AC') {
            display.innerHTML = ''
            operand1 = 0
            operand2 = null
            operator = null
        }
        else if (btn == '=') {
            if(display.innerHTML != ''){
                
                    operand2 = parseFloat(display.innerHTML)
                
                
                    var res = eval(operand1 + operator + operand2);
                    console.log(res)
                    display.innerHTML = (res);
                
                operand2 = res
              
            }

        }
    });
    
}

