//Задание 1
/*const someObj = {
    1 : "uno",
    2 : "dos",
    3 : "tres"
}

//cuatro
//cinco

const getSomeObj = (someObj) => {

    const someObjNew = Object.create(someObj) 
    someObjNew.cuatro = '4'
    someObjNew.cinco = '5'

    for(let key in someObjNew){

        if(someObjNew.hasOwnProperty(key)){
            console.log( key + ' : ' + someObjNew[key] )
        }
    }

}

getSomeObj(someObj)*/

//Задание 2
/*
const someObj = {
    "uno"  : 1,
    "dos"  : 2,
    "tres" : 3
}
const getStrObj = (property, someObj) => {
    return someObj.hasOwnProperty(property);
}

const resultOfFunction = getStrObj('dos', someObj)
console.log(resultOfFunction)*/

//Задание 3
/*
function emptyObj (){
   return Object.create(null)
}

const checkFunction = emptyObj()
console.log(checkFunction)*/

class Parent {

    constructor() {

        this.deviceType = 'electric';

        switchOn = function () {
            console.log(`This deivce is turn on`);
        };

        switchOff = function () {
            console.log(`This deivce is turn off`);
        };

    }
}



 