/**
 *  get the value of input number, and return the pair values to view
 * @return String
 */
function searchValues(){
    var number, numberModified = false, finalNumber, printResult;
    number = document.getElementById("number").value
    printResult = document.getElementById("listValues")
    printResult.innerHTML = '';

    if(!checkIfOk(number))
    return

    if (number.includes("-")) {
        number = Math.abs(number)
        numberModified = true;
    }
    
    returnForView(number, numberModified, finalNumber, printResult)
}
/**
 * check if the number is under the rules then return if is out
 * @param {any} number 
 */
function checkIfOk(number) {
    if (number != parseInt(number) || number > 100) {
        alert("Digite um número inteiro menor ou igual a 100")
        document.getElementById("number").value = " "
        document.getElementById("number").focus()
        return false
    }
    return true
}

/**
 * print the value at view
 * @param {int} number 
 * @param {boolean} numberModified 
 * @param {int} finalNumber 
 * @param {String} printResult 
 */
function returnForView(number, numberModified, finalNumber, printResult) {
    for(var i = 0; i <= number; i++) {
        if ( number == 0 || (i % 2) == 0 ) {
            finalNumber = i;
            if ( numberModified ) {
                finalNumber = -finalNumber
            }
            printResult.innerHTML += "<tr><td>"+ finalNumber +"</td></tr>"
        }
    }
}