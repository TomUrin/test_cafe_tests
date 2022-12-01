import { Selector, t } from "testcafe";
import { ClientFunction } from 'testcafe';

fixture `Test`
    .page `https://www.astuonkojis.lt/prisijungimas`

    const email = Selector('input[type=text]');
    const password = Selector('input[type=password]');
    
test("Errors", async t => {
    const error = Selector('.error-message').exists;
    await t 
    .click(Selector('#age-verification').find('a').withText('Taip'))
    .typeText(Selector(email), "11")
    .typeText(Selector(password), "22")
    .click(Selector('.submit-button'))
    .expect(error).ok()
});

    const URL = 'https://www.astuonkojis.lt/mano-paskyra';
    const getURL = ClientFunction(() => window.location.href);

test("login", async t => {
    await t 
    .click(Selector('#age-verification').find('a').withText('Taip'))
    .typeText(Selector(email), "urinovic.tomas@gmail.com")
    .typeText(Selector(password), "testcafe1122")
    .click(Selector('.submit-button'))
    .expect(getURL()).eql(URL);
});