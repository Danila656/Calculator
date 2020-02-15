let string = ' ';
let example = '';


function shortenString(){
    if (size>13){
        string=string.slice(1);
    }
}

function changeOp() {
    let sign=example.slice(example.length-1);
    switch (sign){
        case '/':
            string=string.slice(0,string.length-1);
            example=example.slice(0,example.length-1);
        break;
        case '*':
            string=string.slice(0,string.length-1);
            example=example.slice(0,example.length-1);
            break;
        case '-':
            string=string.slice(0,string.length-1);
            example=example.slice(0,example.length-1);
            break;
        case '+':
            string=string.slice(0,string.length-1);
            example=example.slice(0,example.length-1);
            break;
        case '.':
            string=string.slice(0,string.length-1);
            example=example.slice(0,example.length-1);
            break;
        default:
            break;
        }
}


function one() {
    string = string + '1';
    example = example + '1';
    document.getElementById('answer').innerHTML = string;
    shortenString();
}

function two() {
    string = string + '2';
    example = example + '2';
    document.getElementById('answer').innerHTML = string;
    shortenString();
}

function three() {
    string = string + '3';
    example = example + '3';
    document.getElementById('answer').innerHTML = string;
    shortenString();
}

function four() {
    string = string + '4';
    example = example + '4';
    document.getElementById('answer').innerHTML = string;
    shortenString();
}

function five() {
    string = string + '5';
    example = example + '5';
    document.getElementById('answer').innerHTML = string;
    shortenString();
}

function six() {
    string = string + '6';
    example = example + '6';
    document.getElementById('answer').innerHTML = string;
    shortenString();
}

function seven() {
    string = string + '7';
    example = example + '7';
    document.getElementById('answer').innerHTML = string;
    shortenString();

}

function eight() {
    string = string + '8';
    example = example + '8';
    document.getElementById('answer').innerHTML = string;
    shortenString();
}

function nine() {
    string = string + '9';
    example = example + '9';
    document.getElementById('answer').innerHTML = string;
    shortenString();
}

function zero() {
    string = string + '0';
    example = example + '0';
    document.getElementById('answer').innerHTML = string;
    shortenString();
}

function multiply() {
    changeOp();
    string = string + '×';
    example = example + '*';
    document.getElementById('answer').innerHTML = string;
    shortenString();
}

function divide() {
    changeOp();
    string = string + '÷';
    example = example + '/';
    document.getElementById('answer').innerHTML = string;
    shortenString();
}

function minus() {
    changeOp();
    string = string + '-';
    example = example + '-';
    document.getElementById('answer').innerHTML = string;
    shortenString();
}

function plus() {
    changeOp();
    string = string + '+';
    example = example + '+';
    document.getElementById('answer').innerHTML = string;
    shortenString();
}

function same() {
    example = eval(example);
    string = example;
    document.getElementById('answer').innerHTML = example;
}

function point() {
    changeOp();
    string = string + '.';
    example = example + '.';
    document.getElementById('answer').innerHTML = string;
}

function remove() {
    string = '';
    example = '';
    document.getElementById('answer').innerHTML = string;
}

