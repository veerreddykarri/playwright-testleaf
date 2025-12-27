var VeerHouse = /** @class */ (function () {
    // 🟩 Constructor
    function VeerHouse(color, rooms) {
        this.color = color;
        this.rooms = rooms;
    }
    VeerHouse.prototype.showDetails = function () {
        console.log("House color: ".concat(this.color));
        console.log("Number of rooms: ".concat(this.rooms));
    };
    return VeerHouse;
}());
// 🏗️ Creating a house (object)
var myHouse1 = new VeerHouse("Blue", 3);
myHouse1.showDetails();
