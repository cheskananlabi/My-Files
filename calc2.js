// ADDITION
document.getElementById("addNumbers").addEventListener("click", function () {
    const num1 = Number(document.getElementById("add1").value);
    const num2 = Number(document.getElementById("add2").value);

    const sum = num1 + num2;

    document.getElementById("result").innerText = `Addition Result: ${sum}`;
});


// SUBTRACTION
document.getElementById("subtractNumbers").addEventListener("click", function () {
    const num1 = Number(document.getElementById("sub1").value);
    const num2 = Number(document.getElementById("sub2").value);

    const difference = num1 - num2;

    document.getElementById("result").innerText = `Subtraction Result: ${difference}`;
});


// MULTIPLICATION
document.getElementById("multiplyNumbers").addEventListener("click", function () {
    const num1 = Number(document.getElementById("multiply1").value);
    const num2 = Number(document.getElementById("multiply2").value);

    const product = num1 * num2;

    document.getElementById("result").innerText = `Multiplication Result: ${product}`;
});


// DIVISION
document.getElementById("divideNumbers").addEventListener("click", function () {
    const num1 = Number(document.getElementById("divide1").value);
    const num2 = Number(document.getElementById("divide2").value);

    const quotient = num1 / num2;

    document.getElementById("result").innerText = `Division Result: ${quotient}`;
});
