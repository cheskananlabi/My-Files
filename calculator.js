    const button = document.getElementById("calculateNumbers");

    button.addEventListener("click", function () {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;

    let result;

    if (operator === "+") {
        result = num1 + num2;
    }

    if (operator === "-") {
        result = num1 - num2;
    }

    if (operator === "*") {
        result = num1 * num2;
    }

    if (operator === "/") {
        result = num1 / num2;
    }

    document.getElementById("insert").innerText = `Result: ${result}`;

    });
