let string = ' ';
let example = '';
let sign;

let shortenString = () => {
    if (example.length > 13) {
        string = string.slice(1);
    }
};

let checkExample = () => {
    if (example.length === 1) {
        if (example === '/' || example==='*' || example==='.' || example==='+') {
            example='';
            string=example;
        }
    }

};

let changeOp = () => {
    sign = example.slice(example.length - 1);
    switch (sign) {
        case '/':
            string = string.slice(0, string.length - 1);
            example = example.slice(0, example.length - 1);
            break;
        case '*':
            string = string.slice(0, string.length - 1);
            example = example.slice(0, example.length - 1);
            break;
        case '-':
            string = string.slice(0, string.length - 1);
            example = example.slice(0, example.length - 1);
            break;
        case '+':
            string = string.slice(0, string.length - 1);
            example = example.slice(0, example.length - 1);
            break;
        case '.':
            string = string.slice(0, string.length - 1);
            example = example.slice(0, example.length - 1);
            break;
    }
};

let number = (num) => {
    string = string + num;
    example = example + num;
    shortenString();
    document.getElementById('answer').innerHTML = string;

};

let op = (op) => {
    changeOp();
    string = string + op;
    example = example + op;
    checkExample();
    document.getElementById('answer').innerHTML = string;
    shortenString();
};


function same() {
    example = eval(example);
    string = example;
    document.getElementById('answer').innerHTML = example;
    example += '';
}

function remove() {
    string = '';
    example = '';
    document.getElementById('answer').innerHTML = string;
}

