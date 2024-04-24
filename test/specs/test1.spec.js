// Aigerim Nurmanova
const PastePage = require('../../pageObjects/PastePage');

describe("Test suite 1", ()=>{
    beforeEach(async () => {
        await PastePage.open();
    });
    it('Check Task 1', async()=>{
        await PastePage.paste('Hello from WebDriver', 'helloweb');
    })
})