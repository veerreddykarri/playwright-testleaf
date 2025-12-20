//Postman API Tests for ServiceNow
import { expect, test } from '@playwright/test';

let sysid: any; //Global Variable

test.describe.serial('ServiceNow API Tests', () => {

    test('Creating change request', async ({ request }) => {

        const response = await request.post('https://dev291487.service-now.com/api/now/table/change_request',
            {
                headers: {
                    "Authorization": "Basic YWRtaW46QjdoL1E3T3dqYy9C",
                    "Content-Type": "application/json"
                },
                data: {
                    "short_description": "Veer Create Change Request with Playwright API"
                }
            })
        const responseBody = await response.json();
        console.log(responseBody);
        console.log(response.status());
        console.log(response.statusText());
        expect(response.status()).toBe(201);
        sysid = responseBody.result.sys_id;
    });

    test('Fetch change request', async ({ request }) => {

        const response = await request.get(`https://dev291487.service-now.com/api/now/table/change_request/${sysid}`,
            {
                headers: {
                    "Authorization": "Basic YWRtaW46QjdoL1E3T3dqYy9C",
                    "Content-Type": "application/json"
                }
            })
        const responseBody = await response.json();
        console.log(responseBody);
        console.log(response.status());
        console.log(response.statusText());
        expect(response.status()).toBe(200);
    });
    test('Updating change request', async ({ request }) => {

        const response = await request.put(`https://dev291487.service-now.com/api/now/table/change_request/${sysid}`,
            {
                headers: {
                    "Authorization": "Basic YWRtaW46QjdoL1E3T3dqYy9C",
                    "Content-Type": "application/json"
                },
                data: {
                    "short_description": "Veer Update Change Request with Playwright API"
                }
            })
        const responseBody = await response.json();
        console.log(responseBody);
        console.log(response.status());
        console.log(response.statusText());
        expect(response.status()).toBe(200);
        expect(responseBody.result.short_description).toBe("Veer Update Change Request with Playwright API");
    });
    test('Delete change request', async ({ request }) => {

        const response = await request.delete(`https://dev291487.service-now.com/api/now/table/change_request/${sysid}`,
            {
                headers: {
                    "Authorization": "Basic YWRtaW46QjdoL1E3T3dqYy9C",
                    "Content-Type": "application/json"
                }
            })
        console.log(response.status());
        console.log(response.statusText());
        expect(response.status()).toBe(204);
    });
});