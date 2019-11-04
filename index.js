const fs = require('fs');

const SPECIAL_SOCIAL_SECURITY_NUMBERS = ["001-01-0001","078-05-1120","457-55-5462"]

let invalidAreaNumbers = ["0","666"]
// for(let step = 900;step<999;step++){
//     invalidAreaNumbers.push(step.toString());
// }

let invalidGroupNumbers = ["0"]

let invalidSerialNumbers = ["0"]



let validAreaNumbers = [];
for(let step = 1; step < 900; step++) {
    if(step != 666){
        validAreaNumbers.push(step.toString());

    }
}

let validGroupNumbers = [];
for(let step = 1; step < 100; step++) {
    validGroupNumbers.push(step.toString())
}

let validSerialNumbers = [];
for(let step = 1; step < 10000; step++) {
    validSerialNumbers.push(step.toString())
}


let output = ""


//invalid area numbers - IVV, IVI, IIV, III
for(areaNumber of invalidAreaNumbers){
    let filename = areaNumber.padStart(3, '0')+"-invalid-social-security-numbers.txt"
    output = ""
    for(groupNumber of validGroupNumbers){
        for(serialNumber of validSerialNumbers){
            output += areaNumber.padStart(3, '0')+"-"+groupNumber.padStart(2, '0')+"-"+serialNumber.padStart(4, '0')+"\n"
        }
        for(serialNumber of invalidSerialNumbers){
            output += areaNumber.padStart(3, '0')+"-"+groupNumber.padStart(2, '0')+"-"+serialNumber.padStart(4, '0')+"\n"
        }
    }
    for(groupNumber of invalidGroupNumbers){
        for(serialNumber of validSerialNumbers){
            output += areaNumber.padStart(3, '0')+"-"+groupNumber.padStart(2, '0')+"-"+serialNumber.padStart(4, '0')+"\n"
        }
        for(serialNumber of invalidSerialNumbers){
            output += areaNumber.padStart(3, '0')+"-"+groupNumber.padStart(2, '0')+"-"+serialNumber.padStart(4, '0')+"\n"
        }
    }

    fs.writeFile(filename, output, (err) => {
        if (err) throw err;
    
        console.log("Saved: "+filename);
    });
}

//invalid group numbers VIV, VII
for(areaNumber of validAreaNumbers){
    let filename = areaNumber.padStart(3, '0')+"-bad-group-invalid-social-security-numbers.txt"
    output = ""
    for(groupNumber of invalidGroupNumbers){
        for(serialNumber of validSerialNumbers){
            output += areaNumber.padStart(3, '0')+"-"+groupNumber.padStart(2, '0')+"-"+serialNumber.padStart(4, '0')+"\n"
        }
        for(serialNumber of invalidSerialNumbers){
            output += areaNumber.padStart(3, '0')+"-"+groupNumber.padStart(2, '0')+"-"+serialNumber.padStart(4, '0')+"\n"
        }
    }

    fs.writeFile(filename, output, (err) => {
        if (err) throw err;
    
        console.log("Saved: "+filename);
    });
}

//invalid serial numbers - VVI
    let filename = "0000-serial-invalid-social-security-numbers.txt"
    output = ""
    for(areaNumber of validAreaNumbers){

    for(groupNumber of validGroupNumbers){
        for(serialNumber of invalidSerialNumbers){
            output += areaNumber.padStart(3, '0')+"-"+groupNumber.padStart(2, '0')+"-"+serialNumber.padStart(4, '0')+"\n"
        }
    }
}

    fs.writeFile(filename, output, (err) => {
        if (err) throw err;
    
        console.log("Saved: "+filename);
    });


// valid ssns - VVV
for(areaNumber of validAreaNumbers){
    let filename = areaNumber.padStart(3, '0')+"-invalid-social-security-numbers.txt"
    output = ""
    for(groupNumber of validGroupNumbers){
        for(serialNumber of validSerialNumbers){
            output += areaNumber.padStart(3, '0')+"-"+groupNumber.padStart(2, '0')+"-"+serialNumber.padStart(4, '0')+"\n"
        }
    }

    fs.writeFile(filename, output, (err) => {
        if (err) throw err;
    
        console.log("Saved: "+filename);
    });
}

//special SSNs, hard coded
output = ""
for(ssn of SPECIAL_SOCIAL_SECURITY_NUMBERS){
output+=ssn+"\n"
}
fs.writeFile("special-social-security-numbers.txt", output, (err) => {
    if (err) throw err;

    console.log("Saved: "+"special-social-security-numbers.txt");
});
