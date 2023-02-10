radio.onReceivedString(function (receivedString) {
    if (receivedString == "MIN") {
        radio.sendValue("MIN", Min)
    } else {
        if (receivedString == "MAX") {
            radio.sendValue("MAX", Max)
        } else {
            if (receivedString == "TEMP") {
                radio.sendValue("TEMP", input.temperature())
            }
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("TEMP=" + input.temperature())
})
let Max = 0
let Min = 0
Min = 88
Max = -88
radio.setGroup(158)
basic.showIcon(IconNames.Yes)
basic.clearScreen()
basic.forever(function () {
    if (input.temperature() < Min) {
        Min = input.temperature()
    }
    if (input.temperature() > Max) {
        Max = input.temperature()
    }
    basic.pause(60000)
})
