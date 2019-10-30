const fs = require('fs');

const SPECIAL_SOCIAL_SECURITY_NUMBERS = ["01-01-0001","078-05-1120","457-55-5462"]

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



for(areaNumber of validAreaNumbers){
    let filename = areaNumber+".txt"
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


