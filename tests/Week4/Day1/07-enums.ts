
//Numeric Enums (Default)
enum Direction {
    North,
    East,
    West,
    South
}
let dir:Direction = Direction.East;
console.log(dir);

//String Enums
enum Enviornment {
    DEV = "Development",
    STAGE = "Staging",
    PROD = "Production"
}
let env:Enviornment = Enviornment.PROD;
console.log(env);

//Heterogenous
enum Status{
SUCCESS = "Success",
ERROR = 0
}
let s1:Status = Status.SUCCESS;
let s2:Status = Status.ERROR;
console.log(s1);
console.log(s2);



