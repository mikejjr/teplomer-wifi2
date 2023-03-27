input.onButtonPressed(Button.A, function () {
    if (true) {
        basic.showString("" + input.temperature() + "°C")
        basic.showIcon(IconNames.SmallDiamond)
        ESP8266_IoT.connectThingSpeak()
        basic.showIcon(IconNames.Diamond)
        ESP8266_IoT.setData(
        "your_write_api_key",
        input.temperature()
        )
        basic.showIcon(IconNames.SmallSquare)
        ESP8266_IoT.uploadData()
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.Yes)
        basic.pause(10000)
    }
})
basic.showIcon(IconNames.Ghost)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("dve antenky 2g", "76685842")
if (ESP8266_IoT.wifiState(true)) {
    basic.showIcon(IconNames.Happy)
} else {
    basic.showIcon(IconNames.Sad)
}
