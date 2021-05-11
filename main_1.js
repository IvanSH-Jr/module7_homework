//Задание 1
const someObj = {
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

getSomeObj(someObj)