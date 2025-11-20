function print() {
    console.log("hello printing from function")
}
print()


function subtraction() {
    let a = 10
    let b = 20
    let c = b - a

    console.log(c)
}
subtraction()


function multi(a, b) {

    c = a * b

    console.log(c)
}
multi(10, 20)

function add(a, b) {

    c = a + b

    return c
}
console.log(add(10, 20))