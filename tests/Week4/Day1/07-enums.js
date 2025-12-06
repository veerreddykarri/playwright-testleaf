//Numeric Enums (Default)
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["West"] = 2] = "West";
    Direction[Direction["South"] = 3] = "South";
})(Direction || (Direction = {}));
var dir = Direction.East;
console.log(dir);
//String Enums
var Enviornment;
(function (Enviornment) {
    Enviornment["DEV"] = "Development";
    Enviornment["STAGE"] = "Staging";
    Enviornment["PROD"] = "Production";
})(Enviornment || (Enviornment = {}));
var env = Enviornment.PROD;
console.log(env);
//Heterogenous
var Status;
(function (Status) {
    Status["SUCCESS"] = "Success";
    Status[Status["ERROR"] = 0] = "ERROR";
})(Status || (Status = {}));
var s1 = Status.SUCCESS;
var s2 = Status.ERROR;
console.log(s1);
console.log(s2);
