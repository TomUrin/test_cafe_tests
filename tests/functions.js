import { Selector, t } from "testcafe";


export async function ageVerification() {
    await t
    .click(Selector('#age-verification').find('a').withText('Taip'))
};
export async function invalidLogin(email, password) {
    await t 
    .typeText(Selector(email), "11")
    .typeText(Selector(password), "22")
};

export async function validLogin(email, password) {
    await t 
    .typeText(Selector(email), "urinovic.tomas@gmail.com")
    .typeText(Selector(password), "testcafe1122")
};

export async function submitButton() {
    await t
    .click(Selector('.submit-button'))
};

export async function firstItem() {
    await t
    .click(Selector('.hor-menu-level1').withText('GĖRIMAI'))
    .click(Selector('.item-id-20045'))
    .click(Selector('.add_to_cart_730'))
};

export async function secondItem() {
    await t
    .click(Selector('.hor-menu-level1').withText('KULINARIJA'))
    .click(Selector('.item-id-19975'))
    .click(Selector('.add_to_cart_619'))
};

export async function cartCheck() {
    await t
    .expect(Selector('.item-title').nth(0).innerText).contains('Žemaičių blynai su mėsa, 1 kg')
    .expect(Selector('.item-title').nth(1).innerText).contains('Ekologiškas rožinis vynas be alkoholio UBY OSMOSE ROSE, 750 ml');
};