//Задание 2

const someObj = {
    "uno"  : 1,
    "dos"  : 2,
    "tres" : 3
}
const getStrObj = (property, someObj) => {
    return someObj.hasOwnProperty(property);
}

const resultOfFunction = getStrObj('dos', someObj)
console.log(resultOfFunction)