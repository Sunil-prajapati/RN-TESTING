import { by } from 'detox'
describe('login process', () => {
    beforeAll(async () => {
        await device.launchApp();
        await waitFor(element(by.id('OnboardingScreen'))).toBeVisible().withTimeout(6000);
        await element(by.text('Next')).tap()
        await element(by.text('Next')).tap() 
        await element(by.text('Sign up')).tap()
        await element(by.id('first_name')).typeText("Sunil")
        await element(by.id('last_name')).typeText("Prajapati") 
        await element(by.id('email')).typeText("sun@noemail.com")
        await element(by.id('password')).typeText("123456")
        await device.pressBack()
    });

    it("Should fill email and password and navigate to home screeen",async() => {
        await expect(element(by.id('Register'))).toBeVisible()
        await element(by.id('Register')).tap()
        await expect(element(by.text('Testing Complete'))).toBeVisible();
    })
});