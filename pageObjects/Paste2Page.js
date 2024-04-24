
class Paste2Page {
    get TextInput() {return $('#postform-text')}
    get NameInput() {return $('#postform-name')}
    get ExpirationDropDown() {return $('#select2-postform-expiration-container')}
    get ExpirationOptions() {return $$('.select2-results__option')}
    get btnSubmit() {return $('button.btn.-big')}
    get FormatDropDown() {return $('#select2-postform-format-container')}
    get FormatOptions() {return $$('.select2-results__option')}

    async open() {
        await browser.url('https://pastebin.com/');
    }

    async paste2(text, name) {

        await this.TextInput.setValue(text);
        await this.NameInput.setValue(name);
        
        await this.ExpirationDropDown.click();
        await this.ExpirationOptions[2].waitForDisplayed()
        await this.ExpirationOptions[2].click();
        
        await this.FormatDropDown.click();
        await this.FormatOptions[2].waitForDisplayed()
        await this.FormatOptions[2].click();

        await this.btnSubmit.click()
    }
}

module.exports = new Paste2Page()