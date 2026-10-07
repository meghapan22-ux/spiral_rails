def on_on_chat():
    global height
    height = 10
    builder.teleport_to(pos(0, 0, 0))
    for index in range(height):
        for index2 in range(4):
            for index3 in range(10):
                builder.move(FORWARD, 1)
                builder.place(STONE_BRICKS)
                builder.move(UP, 1)
                builder.place(RAIL)
                builder.move(DOWN, 1)
            builder.turn(LEFT_TURN)
        builder.move(UP, 3)
player.on_chat("run", on_on_chat)

height = 0
gameplay.set_weather(CLEAR)
gameplay.time_set(gameplay.time(DAY))