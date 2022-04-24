radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    }
    if (receivedNumber == 20) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
    }
    if (receivedNumber == 30) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    }
    if (receivedNumber == 40) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    }
    if (receivedNumber == 50) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
radio.setGroup(59)
