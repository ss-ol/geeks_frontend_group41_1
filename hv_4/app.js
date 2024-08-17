console.log("hv_4")

// 1 задание
function format(phoneNumber){
    let phoneDigits = "";
    for (let char of phoneNumber){
        let charNumber = Number(char);
        if(!isNaN(charNumber) && char !== " ")
            phoneDigits += char;
    }

    if (phoneDigits.startsWith("0")){
        phoneDigits = phoneDigits.slice(1);
    }
    if(phoneDigits.length !== 12){
        phoneDigits = "996" + phoneDigits;
    }

    return phoneDigits;
}
function  getOperatorCode (phoneNumber){
    return phoneNumber.slice(3,6);
}

function checkNurtelecom (code){
    let codes = ["501","502","701","702"];
    return codes.includes(code);
}
function checkMega (code){
    let codes = ["551","552"];
    return codes.includes(code);
}
function checkBeeline (code) {
    let codes = ["771","772", "773","774"];
    return codes.includes(code);
}

function detectOperator(phoneNumber){
    let formattedPhoneNumber = format(phoneNumber);

    let operatorCode = getOperatorCode(formattedPhoneNumber);

    if(checkNurtelecom(operatorCode))
        return "O!"

    if(checkMega(operatorCode))
        return "Mega"

    if(checkBeeline(operatorCode))
        return "Beeline"

    return "ERROR";
}

// 2 задание

function hideNumber(phoneNumber){
    let firstNumber = phoneNumber.slice(0,phoneNumber.length-2);
    let newPhoneNumber = firstNumber+"XX";
    return newPhoneNumber;
}
console.log(hideNumber("+996 700 780 820"))
console.log(hideNumber("5097"))

// 3 задание

function ucFirst(str) {
    let capitalizeString = str.toLowerCase();
    capitalizeString = capitalizeString[0].toUpperCase() + capitalizeString.slice(1);
    return capitalizeString;
}

console.log(ucFirst("HOMEWORK"));