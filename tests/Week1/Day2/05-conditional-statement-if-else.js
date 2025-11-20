function getBrowser(browserName) { //function declaration passing a parameter

    if (browserName === "chrome") {
        console.log("Supported browser is chrome");
    }
    else if (browserName === "edge") {
        console.log("Supported browser is edge");
    }
    else {
        console.log("Not Supported browser");
    }
}
getBrowser("Firefox") //print Not Supported browser
getBrowser("chrome") // print Supported browser is chrome
getBrowser("Edge") //print Not Supported browser because of Edge instead of edge 