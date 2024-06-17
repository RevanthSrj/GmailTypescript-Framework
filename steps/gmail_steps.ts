import { Page, chromium, expect } from "@playwright/test";
import { Login } from "../pages/Login_Page";
import { Compose } from "../pages/Compose_page";

export class GmailStep{
    private readonly page:Page
    private readonly login_page : Login
    private readonly compose_page: Compose
    constructor(page:Page){
        this.page = page
        this.login_page = new Login(page)
        this.compose_page = new Compose(page)
    }

    async launch_browserUrl():Promise<void>{
        const browser = await chromium.launch()
        await this.page.goto("https://www.google.com/gmail/about/")
    }

    async gmail_login():Promise<void>{
        await this.login_page.user_login()
        expect( this.page.url()).toContain("mail")
    }

    async click_composeBtn():Promise<void>{
        await this.compose_page.click_composeButton()
    }
}
