
const GoogleCloudPage = require('../../pageObjects/googleCloudPage');

describe("Test suite 3", () => {
    beforeEach(async () => {
        await GoogleCloudPage.open();
    });

    it('Check Task 3', async () => {
        await GoogleCloudPage.performSearch('Google Cloud Platform Pricing Calculator');
        // You can add assertions here to verify search results if needed
    });
});