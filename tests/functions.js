import { Selector, t } from "testcafe";


export async function ageVerification() {
    await t
    .click(Selector('#age-verification').find('a').withText('Taip'))
};

// Login_Test
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

//Search_Test
export async function searchResults() {
    const kuponas = Selector('.item_hover_wrap_link').nth(0).withText('kuponas').exists;
    const kuponas1 = Selector('.item_hover_wrap_link').nth(1).withText('kuponas').exists;
    const kuponas2 = Selector('.item_hover_wrap_link').nth(2).withText('kuponas').exists;
    await t
    .expect(kuponas).ok()
    .expect(kuponas1).ok()
    .expect(kuponas2).ok()
};

// Cart_test
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

export async function sumCheck() {
    // Items sum
    const sum1String = await Selector('.price').nth(0).innerText;
    const sum1 = parseFloat(sum1String) / 100;
    const sum2String = await  Selector('.price').nth(1).innerText;
    const sum2 = parseFloat(sum2String) / 100;
    const itemsSum = Number(sum1.toFixed(2)) + Number(sum2.toFixed(2));
    // Cart sum
    const cartSumString = await Selector('.cart-summary-row-price').innerText;
    const cartSum = parseFloat(cartSumString);
    // Equal
    await t
    .expect(itemsSum).eql(Number(cartSum))
    // Delete item
    await t
    .click(Selector('a').withText('Pašalinti'))
    .click(Selector('.modal-confirm'))
    // Item sum vs. cart sum check
    const cartSum2 = await Selector('.cart-summary-row-price').innerText;
    const finalCart2 = parseFloat(cartSum2);
    await t
    .expect(Number(cartSum)).notEql(Number(finalCart2))
};