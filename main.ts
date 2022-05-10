let _1 = 90
let _2 = 90
let mode: string = 1
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        mode = 2
    }
})
basic.forever(function () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, 0, _1)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo2, 0, _2)
})
basic.forever(function () {
    if (mode == "2") {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
        if (input.buttonIsPressed(Button.A)) {
            _1 += -5
        }
        if (input.buttonIsPressed(Button.B)) {
            _1 += 5
        }
    }
})
basic.forever(function () {
    if (mode == "1") {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        if (input.buttonIsPressed(Button.A)) {
            _1 += -5
        }
        if (input.buttonIsPressed(Button.B)) {
            _1 += 5
        }
    }
})
