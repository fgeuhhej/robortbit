let sprite = 0
for (let index = 0; index < 14; index++) {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    12,
    robotbit.Motors.M1B,
    12
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    255,
    robotbit.Motors.M2B,
    255
    )
}
robotbit.StpCarMove(10, 48)
robotbit.MotorStopAll()
basic.forever(function () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    255,
    robotbit.Motors.M1B,
    255
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    255,
    robotbit.Motors.M2B,
    255
    )
    basic.pause(100)
    robotbit.MotorStopAll()
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1023)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    sprite = sonar.ping(
    DigitalPin.P15,
    DigitalPin.P16,
    PingUnit.Centimeters
    )
    if (0 > 0 && false) {
    	
    }
})
