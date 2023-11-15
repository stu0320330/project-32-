basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 700) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
        music.stopAllSounds()
    }
})
