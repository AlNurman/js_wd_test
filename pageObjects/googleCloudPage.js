class GoogleCloudPage {
    get searchIcon() { return $('.YSM5S'); }
    get searchInput() { return $('#i4'); }
    get searchResults() { return $('.devsite-search-results'); }
    get calclink() {return $('a.K5hUy[href="https://cloud.google.com/products/calculator"]')}
    get btnAddToEst() {return $('.jirROd button.AeBiU-LgbsSe')}
    get btnComputeEngine() {return  $('div.d5NbRd-EScbFb-JIbuQc')}

    get inputInstance() {return  $('input.qdOxv-fmcmS-wGMbrd')}
    get decrementButton() {return $('div[jsaction="JIbuQc:foQUm"] button')}
    get incrementButton() {return $('div[jsaction="JIbuQc:qGgAE"] button')}

    
   

    async open() {
        await browser.url('https://cloud.google.com');
    }

    async performSearch(keyword) {
        await this.searchIcon.waitForDisplayed();
        await this.searchIcon.click();
        await this.searchInput.waitForDisplayed();
        await this.searchInput.setValue(keyword);
        await browser.keys('Enter');
        await this.calclink.click();
        await this.btnAddToEst.waitForClickable();
        await this.btnAddToEst.click();
        await this.btnComputeEngine.click();

        let currentValue = await inputInstance.getValue()
        currentValue = parseInt(currentValue)
    
        if (currentValue < 4) {
            // Click the increment button until the value reaches 4
            while (parseInt(await inputField.getValue()) < 4) {
                await incrementButton.click();
            }
        } else if (currentValue > 4) {
            // Click the decrement button until the value reaches 4
            while (parseInt(await inputField.getValue()) > 4) {
                await decrementButton.click();
            }
        }
    


        
        
        await this.searchResults.waitForDisplayed();
    }
}

module.exports = new GoogleCloudPage();