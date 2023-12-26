let numberOne  = Number( prompt('Enter the first number'))
let numberTwo = Number(prompt('Enter the second number'))

alert(`
    Number One ${numberOne} , Number two ${numberTwo}
    The sum is ${numberOne + numberTwo}
    The Subtraction is ${numberOne - numberTwo}
    the division is ${numberOne / numberTwo}
    The Multiplication is ${numberOne * numberTwo}
    Rest of the division is  ${numberOne % numberTwo}


    Check if the sum of the two numbers is even? 
    ${((numberOne + numberTwo) % 2 == 0) ? "it's Pair": "it's odd"}

    Check if the two numbers entered are the same ? 
    ${(numberOne == numberTwo)? "equal": "different"}
`)

