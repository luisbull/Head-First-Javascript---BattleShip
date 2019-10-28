var view = {
    displayMessage: function (msg) {
        const message = document.getElementById("messageArea");
        message.innerHTML = msg;
    },
    displayHit: function (locations) {
        let hit = document.getElementById(locations);
        hit.setAttribute("class", "hit");
    },
    displayMiss: function (locations) {
        let miss = document.getElementById(locations);
        miss.setAttribute("class", "miss");
    }
}
view.displayMiss("00")
view.displayHit("01")
view.displayMessage("HELLO WORLD")
