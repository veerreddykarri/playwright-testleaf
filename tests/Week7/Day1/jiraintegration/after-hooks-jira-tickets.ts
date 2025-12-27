import { TestInfo } from "@playwright/test";
import { createJiraIssue } from "./jira-integration";

export async function logADefectInJira(testInfo: TestInfo) {

    if (testInfo.status !== testInfo.expectedStatus) {

        const errorMessage = testInfo.error?.message || "No error message";
        const errorStack = testInfo.error?.stack || "No stack trace";

        const summary = `Automation Failure: ${testInfo.title}`;

        const description = `Playwright Test Failed

Test Name:
${testInfo.title}

Status:
${testInfo.status}

Error Message:
${errorMessage}

Stack Trace:
${errorStack}
    `;

        await createJiraIssue(summary, description);
    }
}
