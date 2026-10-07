player.onChat("run", function on_on_chat() {
    
    height = 10
    builder.teleportTo(pos(0, 0, 0))
    for (let index = 0; index < height; index++) {
        for (let index2 = 0; index2 < 4; index2++) {
            for (let index3 = 0; index3 < 10; index3++) {
                builder.move(FORWARD, 1)
                builder.place(STONE_BRICKS)
                builder.move(UP, 1)
                builder.place(RAIL)
                builder.move(DOWN, 1)
            }
            builder.turn(LEFT_TURN)
        }
        builder.move(UP, 3)
    }
})
let height = 0
gameplay.setWeather(CLEAR)
gameplay.timeSet(gameplay.time(DAY))
