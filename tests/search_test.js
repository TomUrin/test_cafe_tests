import { Selector, t } from "testcafe";

fixture `Search`
    .page `https://www.astuonkojis.lt`

    const search = Selector('input[type=text]');
    
    
test("Errors", async t => {
    const result = Selector('.fwb').withText('3').exists;
    const kuponas = Selector('.item_hover_wrap_link').child(0).withText('kuponas').exists;

    await t 
    .click(Selector('#age-verification').find('a').withText('Taip'))
    .click(Selector('#main-search-submit'))
    .typeText(Selector(search), "kuponas")
    .click(Selector('.submit-button'))
    .expect(result).ok()
    .expect(kuponas).ok()
});