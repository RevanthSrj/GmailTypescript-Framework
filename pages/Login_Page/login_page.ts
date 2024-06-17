import * as selector from './login_locators'
import{Page} from '@playwright/test'
export class Login{
    private readonly page: Page

    constructor(page:Page){
        this.page = page
    }

    async user_login():Promise<void>{
        await this.page.click(selector.signinButton)
        await this.page.fill(selector.mail, "kavya.baskaran@axesstechnology.in")
        await this.page.waitForTimeout(5000)
        await this.page.click(selector.nextButton)
        await this.page.waitForTimeout(5000)
        await this.page.fill(selector.password, "Axess@2023")
        await this.page.waitForTimeout(1000)
        await this.page.click(selector.nextButton)
        }
}
