import {test as myTest} from '@playwright/test'
import { GmailStep } from '../steps/gmail_steps';
export const test = myTest.extend<{step:GmailStep}>({
    step: async ({page}, use) =>{
        const automationSteps = new GmailStep(page);
        await use(automationSteps)
    }

})