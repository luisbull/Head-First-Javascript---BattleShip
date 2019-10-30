// ---------------------------------
//           VIEW OBJECT
// ---------------------------------
// It will display when there is a hit, miss on the grid.
// It will display a message to the user when a hit, miss, ship gets sunk and when the battleship gets sunk.

const view = {
    displayMessage: function (msg) {
        let message = document.getElementById("messageArea");
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



// ---------------------------------
//           MODEL OBJECT
// ---------------------------------
// It has properties for the game.
// It has the logic to find out if there is a Hit or Miss.

let model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    
    ships: [ // ships locations in the grid        
        {locations: ["00","01","02"], hit: ["","",""]},
        {locations: ["10","11","12"], hit: ["","",""]},
        {locations: ["20","21","22"], hit: ["","",""]}
    ],

    fire: function (location) {
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            let index = ship.locations.indexOf(location); // if it matches a location return the location number, otherwise return -1 //
            
            if (index >= 0){
                // we have a hit
                ship.hit[index] = "hit"; // hit class added //
                view.displayHit(location);
                view.displayMessage("HIT");
                //we sunk ship?
                if (this.isSunk(ship)){
                    view.displayMessage("You sunk this ship")
                    this.shipsSunk++;
                }
                return true;
            }
        }
        // we have a miss
        view.displayMiss(location);
        view.displayMessage("MISSED"); // miss class added //
        return false;
    },
    
    // Helps to find if ship sunk
    isSunk: function (ship) {
        for (let i = 0; i < this.shipLength; i++) {
            if (ship.hit[i] !== "hit"){
                return false;
            }
        }
        return true;
    }
}

model.fire("10")
model.fire("11")
model.fire("30")
model.fire("12")
