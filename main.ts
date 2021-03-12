let A1 = 0
let B1 = 0
let A = game.createSprite(0, 1)
let B = game.createSprite(0, 3)
while (B1 >= 50 || A1 >= 50) {
    if (A1 >= 50) {
        basic.showString("A")
    } else if (B1 >= 50) {
        basic.showString("B")
    } else {
        if (input.buttonIsPressed(Button.B)) {
            B1 += 1
        }
        if (input.buttonIsPressed(Button.A)) {
            A1 += 1
        }
        A.set(LedSpriteProperty.X, Math.round(A1 / 10))
        B.set(LedSpriteProperty.X, Math.round(B1 / 10))
    }
}
basic.forever(function () {
	
})
