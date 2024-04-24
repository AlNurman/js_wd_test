

class PastePage{
    
    get TextInput() {return $('#postform-text')}
    get NameInput() {return $('#postform-name')}
    get ExpirationDropDown() {return $('#select2-postform-expiration-container')}
    get ExpirationOptions() {return $$('.select2-results__option')}
    get btnSubmit() {return $('button.btn.-big')}

    async open() {
        await browser.url('https://pastebin.com/');
    }

    async paste(text, name) {
        await this.TextInput.setValue(text);
        await this.NameInput.setValue(name);
        
        await this.ExpirationDropDown.waitForDisplayed();
        await this.ExpirationDropDown.click();
        await this.ExpirationOptions[2].waitForDisplayed()
        await this.ExpirationOptions[2].click();
        
        await this.btnSubmit.click()
    }
}

module.exports = new PastePage()