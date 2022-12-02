import { Selector, t } from "testcafe";
import { ageVerification, submitButton } from "./functions";

fixture `Search`
    .page `https://www.astuonkojis.lt`

    const search = Selector('input[type=text]');
    
test("Errors", async t => {
    const result = Selector('.fwb').withText('3').exists;
    const kuponas = Selector('.item_hover_wrap_link').child(0).withText('kuponas').exists;

    await ageVerification()
    await t 
    .click(Selector('#main-search-submit'))
    .typeText(Selector(search), "kuponas")
    await submitButton()
    await t
    .expect(result).ok()
    .expect(kuponas).ok()
});