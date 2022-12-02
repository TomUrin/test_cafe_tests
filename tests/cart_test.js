import { Selector, t } from "testcafe";
import { ageVerification, cartCheck, firstItem, secondItem } from './functions';

fixture `Cart`
    .page `https://www.astuonkojis.lt`
    
test("Errors", async t => {

    await ageVerification();
    await firstItem();
    await secondItem();
    await t
    .click(Selector('#cart-link'))
    await cartCheck()
});