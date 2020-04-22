//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*
// TEST FUNCTIONS
//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*

function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
};

//console.log(fullName('John', 'Smith'));

//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*

function weightComvertor(unit, weight) {
    let conversion;
    if (unit.toLowerCase() === 'lb') {
        return Math.round(weight * 0.453592) + 'KG';
    } else if (unit.toLowerCase() === 'kg') {
        return Math.round(weight * 2.2) + 'LB';
    };
};

//console.log(weightComvertor('LB', 145));

//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*

function isEven(num) {
    if (num % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    };
};

//console.log(isEven(13), isEven(22));

//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*


function circumference(radius) {
    return (radius * 3.14159) ** 2;
}

// console.log(circumference(10));

//===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*===*


