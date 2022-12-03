import { Selector, t } from "testcafe";
import { ageVerification, searchResults, submitButton } from "./functions";

fixture `Search`
    .page `https://www.astuonkojis.lt`

    const search = Selector('input[type=text]');
    
test("Errors", async t => {
    const result = Selector('.fwb').withText('3').exists;
    
    await ageVerification()
    await t 
    .click(Selector('#main-search-submit'))
    .typeText(Selector(search), "kuponas")
    await submitButton()
    await t
    .expect(result).ok()
    await searchResults()
});