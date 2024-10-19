import { by } from 'detox'
describe('login process', () => {
    beforeAll(async () => {
        await device.launchApp();
        await waitFor(element(by.id('OnboardingScreen'))).toBeVisible().withTimeout(6000);
        await element(by.text('Next')).tap()
        await element(by.text('Next')).tap() 
        await element(by.text('Login')).tap() 
        await element(by.id('email')).typeText("sun@noemail.com")
        await element(by.id('password')).typeText("123456")
        await device.pressBack()
    });

    it("Should fill email and password and navigate to home screeen",async() => {
        await expect(element(by.id('Login'))).toBeVisible()
        await element(by.id('Login')).tap()
        await expect(element(by.text('Testing Complete'))).toBeVisible();
    })
});