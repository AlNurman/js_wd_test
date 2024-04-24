// Aigerim Nurmanova
const Paste2Page = require('../../pageObjects/Paste2Page');

describe("Test suite 2", ()=>{
    beforeEach(async () => {
        await Paste2Page.open();
    });
    it('Check Task 2', async()=>{
        await Paste2Page.paste2('git config --global user.name  """New Sheriff in Town"""'+'\n'+
        'git reset $(git commit-tree HEAD^{tree} -m """Legacy code""")"'+'\n'+
        'git push origin master --force', 'how to gain dominance among developers');
    })
})