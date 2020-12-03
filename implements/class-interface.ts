interface Radio {
    switchRadio(trigger: boolean): void
}

interface Battery {
    checkBatteryStatus(): void
}

interface BatteryWidthBattery extends Radio{
    checkBatteryStatus(): void
}


class Car implements Radio{
    switchRadio(trigger: boolean): void{

    }
}

class Cellphone implements BatteryWidthBattery {
    switchRadio(trigger: boolean){

    }
    checkBatteryStatus() {
    }
}

/*class Cellphone implements Radio, Battery{
    switchRadio(trigger: boolean){

    }
    checkBatteryStatus() {
    }
}*/
