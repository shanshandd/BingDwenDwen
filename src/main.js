import string from './style'


const player = {
    n: 1,
    timer: 100,
    id: undefined,
    ui: {
        showStyle: document.querySelector('.showStyle'),
        style: document.querySelector('style')
    },
    eventsList: {
        ".pause": "pause",
        ".play": "play",
        ".slow": "slow",
        ".normal": "normal",
        ".fast": "fast"
    },
    init: () => {
        for (let event in player.eventsList) {
            if (player.eventsList.hasOwnProperty(event)) {
                let value = player.eventsList[event]
                document.querySelector(event).onclick = player[value]
            }
        }
        player.play()
    },
    run: () => {
        if (player.n === string.length) {
            clearInterval(player.id)
        }
        player.ui.showStyle.innerText = string.substring(0, player.n)
        player.ui.showStyle.scrollTop = 9999;
        player.ui.style.innerHTML = string.substring(0, player.n)
        player.n++;
    },
    pause: () => {
        clearInterval(player.id)
    },
    play: () => {
        player.id = setInterval(player.run, player.timer)
    },
    slow: () => {
        player.pause()
        player.timer = 300;
        player.play()
    },
    normal: () => {
        player.pause()
        player.timer = 100;
        player.play()
    },
    fast: () => {
        player.pause()
        player.timer = 0;
        player.play()
    }
}
player.init()