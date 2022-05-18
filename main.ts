let first = 90
let second = 90
let mode = true
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        mode = false
    }
})
basic.forever(function () {
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo2, second, 64)
    PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, first, 64)
})
basic.forever(function () {
    if (mode == false) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
        if (input.buttonIsPressed(Button.A)) {
            second += -15
        }
        if (input.buttonIsPressed(Button.B)) {
            second += 15
        }
    }
})
basic.forever(function () {
    if (mode == true) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    }
    if (input.buttonIsPressed(Button.A)) {
        first += -15
    }
    if (input.buttonIsPressed(Button.B)) {
        first += 15
    }
})
