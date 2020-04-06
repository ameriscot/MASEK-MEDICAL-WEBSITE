class Base {
    pauseShort() {
        browser.pause(1000)
    }

    pauseMedium() {
        browser.pause(3000)
    }

    pauseLong() {
        browser.pause(5000)
    }
}

export default Base