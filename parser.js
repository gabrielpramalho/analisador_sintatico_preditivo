const V = ['E', 'T', 'X', 'F', 'Y'];
const NUM = '1';
const OPEN = '(';
const CLOSE = ')';
const SUM = '+';
const SUB = '-';
const EOF = '$';

const preditiveTable = (VAR, peek) => {
    if(VAR == 'E'){
        if(peek == NUM || peek == OPEN){
            return "TX";
        }
    }

    if(VAR == 'X'){
        if(peek == SUM){
            return "+TX";
        }
        if(peek == CLOSE || peek == EOF){
            return "";
        }
    }

    if(VAR == 'T'){
        if(peek == NUM || peek == OPEN){
            return "FY";
        }
    }

    if(VAR == 'Y'){
        if(peek == SUB){
            return "-TX";
        }
        if(peek == CLOSE || peek == SUM || peek == EOF){
            return "";
        }
    }

    if(VAR == 'F'){
        if(peek == NUM){
            return "1";
        }
        if(peek == OPEN){
            return "(E)";
        }
    }

}

let input = "(1+1)-1";
let pos = 0;
const nextToken = () => {
    if (input.length > pos) {
        return input[pos++]
    } else {
        return EOF;
    }
};

const parse = () => {
    let stack = ['$'];
    let peek = nextToken();
    let VAR = 'E';
    while (VAR != EOF) {
        console.log("VAR = " + VAR);
        console.log("peek = " + peek);
        if (VAR == peek) {
            console.log("match(" + peek + ")");
            peek = nextToken();
        } else if (V.includes(VAR)) {
            let predictive = preditiveTable(VAR, peek);
            console.log("Empilha = " + predictive);
            if (predictive == undefined) {
                return "error";
            }
            console.log(stack);
            predictive.split('').reverse().forEach(s => stack.push(s));
            console.log(stack);
            
        }
        VAR = stack.pop();
    }
    return "Aceita";
}

console.log(parse());