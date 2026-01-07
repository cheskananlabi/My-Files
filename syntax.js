document.getElementById("num").innerHTML = 123456;
document.getElementById("deci").innerHTML = 3.14159;

document.getElementById("doubleq").innerHTML = "Hello, World!";
document.getElementById("singleq").innerHTML = 'Hello, JavaScript!';

let greeting = "Welcome to JavaScript!";
const pi = 3.14159;
var isActive = true;

document.getElementById("vlet").innerHTML = greeting;
document.getElementById("vconst").innerHTML = pi;
document.getElementById("vvar").innerHTML = isActive;

let aa = 10;
const bb = 20;
var cc = 30;

document.getElementById("a").innerHTML = aa;
document.getElementById("b").innerHTML = bb;
document.getElementById("c").innerHTML = cc;

function changeValue() {
        aa = 50;
        cc = 70;

        document.getElementById("a").innerHTML = aa;
        document.getElementById("c").innerHTML = cc;
    }