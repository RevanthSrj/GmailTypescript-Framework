import { Page } from '@playwright/test'
import * as selectors from './compose_locators'

export class Compose{
    private readonly page:Page

    constructor(page:Page){
        this.page = page
    }

    async click_composeButton():Promise<void>{
        await this.page.click(selectors.composeButton)
        await this.page.fill(selectors.toButton, "akshaya.pandiyan@axesstechnology.in")
        await this.page.keyboard.press('Enter')
        await this.page.fill(selectors.subject, "Test Mail")
        await this.page.fill(selectors.textBox, "Hi")
        await this.page.click(selectors.sendButton)
        await this.page.waitForTimeout(5000)
        console.log("Test Case runnning")
        console.log("Test Passed")

        

}
}