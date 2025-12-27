var Browser = /** @class */ (function () {
    function Browser() {
        this.browserInfo = "Chrome";
        this.browserVersion = 114;
    }
    Browser.prototype.launchBrowser = function () {
        console.log("Launching Chrome Browser");
    };
    Browser.prototype.loadingPage = function () {
        console.log("Loading LeafTaps Page");
    };
    return Browser;
}());
var leafTaps = new Browser();
leafTaps.launchBrowser();
leafTaps.loadingPage();
leafTaps.browserInfo;
leafTaps.browserVersion;
console.log("Browser Info: ".concat(leafTaps.browserInfo, ", Version: ").concat(leafTaps.browserVersion));
var leafTaps1 = new Browser();
leafTaps1.loadingPage();
