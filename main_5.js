
'use strict';
let powerRate = 0
class ElectricDevice {

    constructor(name) {
        this.name = name
    }

    modeOn = function(enable, amperage, voltage){
        if (enable === true){
            powerRate = voltage * amperage
            console.log('Вкл ' + this.name + ' P = ' + powerRate)
        }else{
            console.log('Откл ' + this.name)
        }
    }

}



class Laptope extends ElectricDevice{
        checkBat = function(battery){
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


class Microwave extends ElectricDevice{

    microwaveModes = function (modes){
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
                console.log('Выкл')
                break;
        }
    }

}

const dell = new Laptope('dell')
dell.modeOn(true, 2.5, 220)

const samsung = new Microwave('Samsung')
samsung.modeOn(false)
samsung.microwaveModes(5)

