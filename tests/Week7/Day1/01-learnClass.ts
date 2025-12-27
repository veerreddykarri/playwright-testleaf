class Browser {
    browserInfo: string = "Chrome";
    browserVersion: number = 114;

    launchBrowser() {
        console.log("Launching Chrome Browser");
    }

    loadingPage() {
        console.log("Loading LeafTaps Page");
    }
}

let leafTaps = new Browser();
leafTaps.launchBrowser();
leafTaps.loadingPage();
leafTaps.browserInfo;
leafTaps.browserVersion;
console.log(`Browser Info: ${leafTaps.browserInfo}, Version: ${leafTaps.browserVersion}`);

let leafTaps1 = new Browser();
leafTaps1.loadingPage();