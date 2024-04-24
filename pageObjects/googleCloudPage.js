class GoogleCloudPage {
    get searchIcon() { return $('.YSM5S'); }
    get searchInput() { return $('#i4'); }
    get searchResults() { return $('.devsite-search-results'); }
    get calclink() {return $('a.K5hUy[href="https://cloud.google.com/products/calculator"]')}
    get btnAddToEst() {return $('.jirROd button.AeBiU-LgbsSe')}
    get btnComputeEngine() {return  $('div.d5NbRd-EScbFb-JIbuQc')}
    
   

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
        await this.btnAddToEst.click();
        await this.btnComputeEngine.click();
        
        
        await this.searchResults.waitForDisplayed();
    }
}

module.exports = new GoogleCloudPage();