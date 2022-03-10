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
    ...................cc...
    ...............cccc63c..
    ..............c633336c..
    ..........cc.c6cc33333c.
    .........b55c6c55c33333c
    .........ff5c6c5ff33333c
    .........ff5c6c5ff6333cc
    .........b553c355c6666cc
    ..........b55355c333333c
    .........cc55555bcc3333c
    ........c5545554b55c33c.
    ........b54b4444bb5cbb..
    ........c455b4b5554c45b.
    ........c555c4c555c4c5c.
    ........c5555c5555c4c5c.
    .........ccccccccc..ccc.
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
