function swap (num: number, num2: number) {
    temp = list[num]
    list[num] = list[num2]
    list[num2] = temp
}
function compare (a: number, b: number) {
    return a < b
}
function bubbleSort () {
    for (let index = 0; index <= list.length; index++) {
        for (let index2 = 0; index2 <= index; index2++) {
            if (compare(list[index], list[index2])) {
                swap(index, index2)
            }
        }
    }
}
function binary_search () {
    while (low <= high) {
        mid = (low + high) / 2
        if (mid < target) {
            low = mid
        } else if (mid > target) {
            high = mid
        } else if (mid == target) {
            return list.indexOf(mid)
        }
    }
    return -1
}
let mid = 0
let temp = 0
let high = 0
let target = 0
let low = 0
let list: number[] = []
scene.setBackgroundColor(9)
list = [
randint(0, 9999999999),
randint(0, 9999999999),
randint(0, 9999999999),
randint(0, 9999999999),
randint(0, 9999999999),
randint(0, 9999999999),
randint(0, 9999999999),
randint(0, 9999999999),
randint(0, 9999999999),
randint(0, 9999999999),
randint(0, 9999999999),
randint(0, 9999999999)
]
bubbleSort()
let mySprite2 = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Player)
low = 0
target = game.askForNumber("What number?", 10)
game.splash(list)
high = list[list.length - 1]
let foundIndex = binary_search()
if (foundIndex == -1) {
    game.splash("Sorry, you're not on the list")
} else {
    game.splash(foundIndex)
}
