let string = '';
let example = '';
let size;

function one() {
    if (size % 38 === 0) {
        string= string + '<br>';
    }
    string = string + 1;
    example = example + '1';
    size = string.length;
    document.getElementById('answer').innerHTML = string;
}

function two() {
    if (size % 38 === 0) {
        string= string + '<br>';
    }
    string = string + '2';
    example = example + '2';
    document.getElementById('answer').innerHTML = string;
}

function three() {
    if (size % 38 === 0) {
        string= string + '<br>';
    }
    string = string + '3';
    example = example + '3';
    document.getElementById('answer').innerHTML = string;
}

function four() {
    if (size % 38 === 0) {
        string= string + '<br>';
    }
    string = string + '4';
    example = example + '4';
    document.getElementById('answer').innerHTML = string;
}

function five() {
    if (size % 38 === 0) {
        string= string + '<br>';
    }
    string = string + '5';
    example = example + '5';
    document.getElementById('answer').innerHTML = string;
}

function six() {
    if (size % 38 === 0) {
        string= string + '<br>';
    }
    string = string + '6';
    example = example + '6';
    document.getElementById('answer').innerHTML = string;
}

function seven() {
    if (size % 38 === 0) {
        string= string + '<br>';
    }
    string = string + '7';
    example = example + '7';
    document.getElementById('answer').innerHTML = string;
}

function eight() {
    if (size % 38 === 0) {
        string= string + '<br>';
    }
    string = string + '8';
    example = example + '8';
    document.getElementById('answer').innerHTML = string;
}

function nine() {
    if (size % 38 === 0) {
        string= string + '<br>';
    }
    string = string + '9';
    example = example + '9';
    document.getElementById('answer').innerHTML = string;
}

function zero() {
    if (size % 38 === 0) {
        string= string + '<br>';
    }
    string = string + '0';
    example = example + '0';
    document.getElementById('answer').innerHTML = string;
}

function multiply() {
    if (size % 38 === 0) {
        string= string + '<br>';
    }
    string = string + 'x';
    example = example + '*';
    document.getElementById('answer').innerHTML = string;
}

function divide() {
    if (size % 38 === 0) {
        string= string + '<br>';
    }
    string = string + ':';
    example = example + '/';
    document.getElementById('answer').innerHTML = string;
}

function minus() {
    if (size % 38 === 0) {
        string= string + '<br>';
    }
    string = string + '-';
    example = example + '/';
    document.getElementById('answer').innerHTML = string;
}

function plus() {
    if (size % 38 === 0) {
        string= string + '<br>';
    }
    string = string + '+';
    example = example + '+';
    document.getElementById('answer').innerHTML = string;
}

function same() {
    document.getElementById('answer').innerHTML = eval(example)
}

function point() {
    if (size % 38 === 0) {
        string= string + '<br>';
    }
    string = string + '.';
    example = example + '.';
    document.getElementById('answer').innerHTML = string;
}


