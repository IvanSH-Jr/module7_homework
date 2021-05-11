let powerRate = 0
function ElectricDevice (name) {
    this.name = name

    this.modeOn = function(enable, amperage, voltage){
        if (enable === true){
            powerRate = voltage * amperage
            console.log('Вкл ' + this.name + ' P = ' + powerRate)
        }else{
            console.log('Откл ' + this.name)
        }
    }
    
}

function Laptope(diagonal, color){
    this.diagonal = diagonal
    this.color = color
    this.checkBat = function(battery){
        switch (battery) {
            case 1:
                console.log(this.name + ' Заряжен')
                break;
            case 0.5:
                console.log(this.name + ' 50% батареи')
                break;
            case 0.1:
                console.log(this.name + ' Критический уровень')
                break;
            default:
                console.log('Сдох')
                break;
        }
    }
}


function Microwave (){
    this.microwaveModes = function (modes){
        switch (modes) {
            case 1:
                console.log(this.name + ' Греть')
                break;
            case 2:
                console.log(this.name + ' Разморозка')
                break;
            case 3:
                console.log(this.name + ' Установка даты/времени')
                break;
            default:
                console.log('Убит')
                break;
        }
    }
} 

const example = new ElectricDevice('dell')
example.modeOn(true, 2.5, 220)
/////////////////////////////////////////////////
Laptope.prototype = new ElectricDevice('Asus')
const asus = new Laptope()
asus.modeOn(true, 2.5, 220)
asus.checkBat(0.1)
//////////////////////////////////////////
Microwave.prototype = new ElectricDevice('Samsung')
const samsung = new Microwave()
samsung.modeOn(true, 4, 220)
samsung.microwaveModes(2)



