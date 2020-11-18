controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isfacingleft) {
        music.baDing.play()
        mySprite.setImage(img`
            ...........ff.......
            .........ff2ffff....
            ........ff2feeeeff..
            .......ff22feeeeeff.
            .......feeeeffeeeef.
            ......fe2222eefffff.
            ......f2effff222efff
            ......fffeeeffffffff
            ......fee44fbe44efef
            .......feddfb4d4eef.
            ......c.eeddd4eeef..
            ccccccceddee2222f...
            .dddddcedd44e444f...
            ..ccccc.eeeefffff...
            ......c...ffffffff..
            ...........ff..fff..
            `)
        pause(200)
        mySprite.setImage(img`
            . . . f f f f f f . . . . 
            . . f 2 f e e e e f f . . 
            . f 2 2 2 f e e e e f f . 
            . f e e e e f f e e e f . 
            f e 2 2 2 2 e e f f f f . 
            f 2 e f f f f 2 2 2 e f . 
            f f f e e e f f f f f f f 
            f e e 4 4 f b e 4 4 e f f 
            . f e d d f 1 4 d 4 e e f 
            . . f d d d d 4 e e e f . 
            . . f e 4 4 4 e e f f . . 
            . . f 2 2 2 e d d 4 . . . 
            . . f 2 2 2 e d d e . . . 
            . . f 5 5 4 f e e f . . . 
            . . . f f f f f f . . . . 
            . . . . . f f f . . . . . 
            `)
    } else {
        mySprite.setImage(img`
            .......ff...........
            ....ffff2ff.........
            ..ffeeeef2ff........
            .ffeeeeef22ff.......
            .feeeeffeeeef.......
            .fffffee2222ef......
            fffe222ffffe2f......
            ffffffffeeefff......
            fefe44ebf44eef......
            .fee4d4bfddef.......
            ..feee4dddee.c......
            ...f2222eeddeccccccc
            ...f444e44ddecddddd.
            ...fffffeeee.ccccc..
            ..ffffffff...c......
            ..fff..ff...........
            `)
        pause(200)
        mySprite.setImage(img`
            . . . . f f f f f f . . . 
            . . f f e e e e f 2 f . . 
            . f f e e e e f 2 2 2 f . 
            . f e e e f f e e e e f . 
            . f f f f e e 2 2 2 2 e f 
            . f e 2 2 2 f f f f e 2 f 
            f f f f f f f e e e f f f 
            f f e 4 4 e b f 4 4 e e f 
            f e e 4 d 4 1 f d d e f . 
            . f e e e 4 d d d d f . . 
            . . f f e e 4 4 4 e f . . 
            . . . 4 d d e 2 2 2 f . . 
            . . . e d d e 2 2 2 f . . 
            . . . f e e f 4 5 5 f . . 
            . . . . f f f f f f . . . 
            . . . . . f f f . . . . . 
            `)
    }
})
let isfacingleft = false
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . f f f f f f . . . 
    . . f f e e e e f 2 f . . 
    . f f e e e e f 2 2 2 f . 
    . f e e e f f e e e e f . 
    . f f f f e e 2 2 2 2 e f 
    . f e 2 2 2 f f f f e 2 f 
    f f f f f f f e e e f f f 
    f f e 4 4 e b f 4 4 e e f 
    f e e 4 d 4 1 f d d e f . 
    . f e e e 4 d d d d f . . 
    . . f f e e 4 4 4 e f . . 
    . . . 4 d d e 2 2 2 f . . 
    . . . e d d e 2 2 2 f . . 
    . . . f e e f 4 5 5 f . . 
    . . . . f f f f f f . . . 
    . . . . . f f f . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.castle.tilePath5], TileScale.Sixteen))
forever(function () {
    if (controller.right.isPressed()) {
        mySprite.setImage(img`
            . . . . f f f f f f . . . 
            . . f f e e e e f 2 f . . 
            . f f e e e e f 2 2 2 f . 
            . f e e e f f e e e e f . 
            . f f f f e e 2 2 2 2 e f 
            . f e 2 2 2 f f f f e 2 f 
            f f f f f f f e e e f f f 
            f f e 4 4 e b f 4 4 e e f 
            f e e 4 d 4 1 f d d e f . 
            . f e e e 4 d d d d f . . 
            . . f f e e 4 4 4 e f . . 
            . . . 4 d d e 2 2 2 f . . 
            . . . e d d e 2 2 2 f . . 
            . . . f e e f 4 5 5 f . . 
            . . . . f f f f f f . . . 
            . . . . . f f f . . . . . 
            `)
        pause(100)
        mySprite.setImage(img`
            . . . . f f f f f f . . . 
            . . f f e e e e f 2 f . . 
            . f f e e e e f 2 2 2 f . 
            . f e e e f f e e e e f . 
            . f f f f e e 2 2 2 2 e f 
            . f e 2 2 2 f f f f e 2 f 
            . f f f f f f e e e f f f 
            f f e 4 4 e b f 4 4 e e f 
            f e e 4 d 4 1 f d d e f . 
            f f e e e e e d d d f . . 
            . . . f 4 d d e 4 e f . . 
            . . . f e d d e 2 2 f . . 
            . . f f f e e f 5 5 f f . 
            . . f f f f f f f f f f . 
            . . . f f . . . f f f . . 
            `)
        pause(100)
        isfacingleft = false
        mySprite.setImage(img`
            . . . . f f f f f f . . . 
            . . f f e e e e f 2 f . . 
            . f f e e e e f 2 2 2 f . 
            . f e e e f f e e e e f . 
            . f f f f e e 2 2 2 2 e f 
            . f e 2 2 2 f f f f e 2 f 
            f f f f f f f e e e f f f 
            f f e 4 4 e b f 4 4 e e f 
            f e e 4 d 4 1 f d d e f . 
            . f e e e 4 d d d d f . . 
            . . f f e e 4 4 4 e f . . 
            . . . 4 d d e 2 2 2 f . . 
            . . . e d d e 2 2 2 f . . 
            . . . f e e f 4 5 5 f . . 
            . . . . f f f f f f . . . 
            . . . . . f f f . . . . . 
            `)
    }
    if (controller.left.isPressed()) {
        isfacingleft = true
        mySprite.setImage(img`
            . . . f f f f f f . . . . 
            . . f 2 f e e e e f f . . 
            . f 2 2 2 f e e e e f f . 
            . f e e e e f f e e e f . 
            f e 2 2 2 2 e e f f f f . 
            f 2 e f f f f 2 2 2 e f . 
            f f f e e e f f f f f f f 
            f e e 4 4 f b e 4 4 e f f 
            . f e d d f 1 4 d 4 e e f 
            . . f d d d d 4 e e e f . 
            . . f e 4 4 4 e e f f . . 
            . . f 2 2 2 e d d 4 . . . 
            . . f 2 2 2 e d d e . . . 
            . . f 5 5 4 f e e f . . . 
            . . . f f f f f f . . . . 
            . . . . . f f f . . . . . 
            `)
        pause(100)
        mySprite.setImage(img`
            . . . f f f f f f . . . . 
            . . f 2 f e e e e f f . . 
            . f 2 2 2 f e e e e f f . 
            . f e e e e f f e e e f . 
            f e 2 2 2 2 e e f f f f . 
            f 2 e f f f f 2 2 2 e f . 
            f f f e e e f f f f f f f 
            f e e 4 4 f b e 4 4 e f f 
            . f e d d f 1 4 d 4 e e f 
            . . f d d d e e e e e f . 
            . . f e 4 e d d 4 f . . . 
            . . f 2 2 e d d e f . . . 
            . f f 5 5 f e e f f f . . 
            . f f f f f f f f f f . . 
            . . f f f . . . f f . . . 
            `)
        pause(100)
        mySprite.setImage(img`
            . . . f f f f f f . . . . 
            . . f 2 f e e e e f f . . 
            . f 2 2 2 f e e e e f f . 
            . f e e e e f f e e e f . 
            f e 2 2 2 2 e e f f f f . 
            f 2 e f f f f 2 2 2 e f . 
            f f f e e e f f f f f f f 
            f e e 4 4 f b e 4 4 e f f 
            . f e d d f 1 4 d 4 e e f 
            . . f d d d d 4 e e e f . 
            . . f e 4 4 4 e e f f . . 
            . . f 2 2 2 e d d 4 . . . 
            . . f 2 2 2 e d d e . . . 
            . . f 5 5 4 f e e f . . . 
            . . . f f f f f f . . . . 
            . . . . . f f f . . . . . 
            `)
    }
})
