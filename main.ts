input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.East)
    Coor_X += 1
    basic.showNumber(Coor_X)
    basic.pause(200)
})
function Valid_coord () {
    if (Coor_X <= 4 && Coor_Y <= 4) {
        Coordenadas = game.createSprite(Coor_X, Coor_Y)
        return true
    } else {
        return false
    }
}
input.onButtonPressed(Button.AB, function () {
    Coor_X = 0
    Coor_Y = 0
    Vuelos = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.South)
    Coor_Y += 1
    basic.showNumber(Coor_Y)
    basic.pause(200)
})
let Coordenadas: game.LedSprite = null
let Vuelos = 0
let Coor_Y = 0
let Coor_X = 0
Coor_X = 0
Coor_Y = 0
Vuelos = 0
Coordenadas = game.createSprite(Coor_X, Coor_Y)
basic.forever(function () {
    if (Valid_coord() && Vuelos <= 5) {
        Vuelos += 1
        basic.showString("VA")
        basic.showNumber(Vuelos)
        Coor_X = 0
        Coor_Y = 0
    } else {
        basic.showIcon(IconNames.No)
    }
})
