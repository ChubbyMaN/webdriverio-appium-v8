describe('Android Elements Tests', () => {
    it('Find element by acessibility id', async () => {
        // find element by accessibility id
        const appOption = await $('~App');

        // click on element
        await appOption.click()

        // assertion
        const actionBar = await $('~Action Bar')
        await expect(actionBar).toBeExisting();
    })

    it('Find element by class name', async () => {
        // find element by class name
        const className = await $('android.widget.TextView')

        //Assertion
        await expect(className).toHaveText('API Demos');
    })

    it.only('Find element by xpath', async () => {
        const appOption = await $('~App');
        await appOption.click()

        // find element by xpath
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click()

        // find by resourceId
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click()

        // find element by text
        await $('//android.widget.TextView[@text="Command two"]').click()

        // find by class - assertion
        const textAssertion = await $('//android.widget.TextView')
        await expect(textAssertion).toHaveText("You selected: 1 , Command two")
    })
})