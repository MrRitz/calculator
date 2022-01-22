const screen = document.getElementById('screen');
const numButton = document.querySelectorAll('.num-button');
const mathButton = document.querySelectorAll('.math-button')
let firstNumber = "";
let secondNumber = "";
let mathSymbol = "";
numButton.forEach(ele => {
    ele.addEventListener('click', (event) => {
        if (mathButton[0].disabled === true) {
            secondNumber += event.target.value;
            screen.value += event.target.value;
        } else {
            screen.value += event.target.value;
            firstNumber += event.target.value;
        }
    })
});
mathButton.forEach(ele => {
    ele.addEventListener('click', (event) => {
        if (event.target.value === "AC") {
            mathButton.forEach(ele => {
                ele.disabled = false;
                screen.value = "";
                firstNumber = "";
                secondNumber = "";
                numButton.forEach(ele => {
                    ele.disabled = false;
                });
            });
        } else if (event.target.value === "C") {
            if (screen.value === "") {
                numButton.forEach(ele => {
                    ele.disabled = false;
                })
                mathButton[0].disabled = false;
                mathButton[1].disabled = false;
                mathButton[2].disabled = false;
                mathButton[3].disabled = false;
            }
            if (secondNumber.length > 0) {
                screen.value = screen.value.slice(0, screen.value.length - 1);
                secondNumber = secondNumber.slice(0, secondNumber.length - 1);;
            } else {
                screen.value = screen.value.slice(0, screen.value.length - 1);
                firstNumber = firstNumber.slice(0, firstNumber.length - 1);
            }
        } else if (event.target.value === "+") {
            if (firstNumber.length > 0) {
            screen.value += " " + "+" + " ";
            mathSymbol = "+";
            mathButton[0].disabled = true;
            mathButton[1].disabled = true;
            mathButton[2].disabled = true;
            mathButton[3].disabled = true;
            } else {return}
        } else if (event.target.value === "-") {
            if (firstNumber.length > 0) {
            screen.value += " " + "-" + " ";
            mathSymbol = "-";
            mathButton[0].disabled = true;
            mathButton[1].disabled = true;
            mathButton[2].disabled = true;
            mathButton[3].disabled = true;
            } else {return}
        } else if (event.target.value === "*") {
            if (firstNumber.length > 0) {
            screen.value += " " + "*" + " ";
            mathSymbol = "*";
            mathButton[0].disabled = true;
            mathButton[1].disabled = true;
            mathButton[2].disabled = true;
            mathButton[3].disabled = true;
            } else {return}
        } else if (event.target.value === "/") {
            if (firstNumber.length > 0) {
            screen.value += " " + "/" + " ";
            mathSymbol = "/";
            mathButton[0].disabled = true;
            mathButton[1].disabled = true;
            mathButton[2].disabled = true;
            mathButton[3].disabled = true;
            } else {return}
        } else if (event.target.value === "=") {
            numButton.forEach(ele => {
                ele.disabled = true;
            })
            if (secondNumber === "") {
                screen.value = "Error! Press AC";
                numButton.forEach(ele => {
                    ele.disabled = true;
                })
            }
            else if (mathSymbol === "+") {
                screen.value = add(firstNumber, secondNumber);
            } else if (mathSymbol === "-") {
                screen.value = subtract(firstNumber, secondNumber);
            } else if (mathSymbol === "*") {
                screen.value = multipy(firstNumber, secondNumber);
            } else if (mathSymbol === "/") {
                screen.value = divide(firstNumber, secondNumber);
            } else {
                screen.value = "Error! Press AC"
                numButton.disabled = true
            }
        }
    })
})

function add(a, b) {
    let c = parseFloat(a) + parseFloat(b);
    return c;
}

function subtract(a, b) {
    let c = parseFloat(a) - parseFloat(b);
    return c;
}

function multipy(a, b) {
    let c = parseFloat(a) * parseFloat(b);
    return c;
}

function divide(a, b) {
    let c = parseFloat(a) / parseFloat(b);
    return c;
}