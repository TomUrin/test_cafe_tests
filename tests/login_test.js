import { Selector, t } from "testcafe";
import { ClientFunction } from 'testcafe';
import { ageVerification, invalidLogin, validLogin, submitButton } from "./functions";

fixture `Test`
    .page `https://www.astuonkojis.lt/prisijungimas`

    const email = Selector('input[type=text]');
    const password = Selector('input[type=password]');
    
test("Errors", async t => {
    const error = Selector('.error-message').exists;
    await ageVerification()
    await invalidLogin(email, password)
    await submitButton()
    await t
    .expect(error).ok()
});

    const URL = 'https://www.astuonkojis.lt/mano-paskyra';
    const getURL = ClientFunction(() => window.location.href);

test("login", async t => {
    await ageVerification()
    await validLogin(email, password)
    await submitButton()
    await t
    .expect(getURL()).eql(URL);
});