function add(){
    const forma = document.getElementById('forma');
    let firstNumber = forma['firstNumber'];
    let secondNumber = forma['secondNumber'];
    let result = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
    if(isNaN(result)){
        result = 'The operation does not have numbers';
    }
    document.getElementById('result').innerHTML = `Result: ${result}`;
}

function subtract(){
    const forma = document.getElementById('forma');
    let firstNumber = forma['firstNumber'];
    let secondNumber = forma['secondNumber'];
    let result = parseFloat(firstNumber.value) - parseFloat(secondNumber.value);
    if(isNaN(result)){
        result = 'The operation does not have numbers';
    }
    document.getElementById('result').innerHTML = `Result: ${result}`;
}

function multiply(){
    const forma = document.getElementById('forma');
    let firstNumber = forma['firstNumber'];
    let secondNumber = forma['secondNumber'];
    let result = parseFloat(firstNumber.value) * parseFloat(secondNumber.value);
    if(isNaN(result)){
        result = 'The operation does not have numbers';
    }
    document.getElementById('result').innerHTML = `Result: ${result}`;
}

function divide(){
    const forma = document.getElementById('forma');
    let firstNumber = forma['firstNumber'];
    let secondNumber = forma['secondNumber'];
    let result = parseFloat(firstNumber.value) / parseFloat(secondNumber.value);
    if(isNaN(result)){
        result = 'The operation does not have numbers';
    }
    if(parseFloat(secondNumber.value) === 0){
        result = 'We can not divide any number by zero';
        document.getElementById('result').innerHTML = `Result: ${result}`;
    } else {
        document.getElementById('result').innerHTML = `Result: ${result}`;
    }
}

function reset(){
    const forma = document.getElementById('forma');
    forma['firstNumber'].value = '';
    forma['secondNumber'].value = '';
    document.getElementById('result').innerHTML = '';
}