import { test } from "./testFixture";

test("Gmail Login", async({step})=>{
    await step.launch_browserUrl()
    await step.gmail_login()
    await step.click_composeBtn()
})